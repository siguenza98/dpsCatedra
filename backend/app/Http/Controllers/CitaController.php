<?php

namespace App\Http\Controllers;

//declarando modelo a usar en controller
use App\Models\Cita;

use Illuminate\Http\Request;

class CitaController extends Controller
{

    public function index()
    {
        //seleccionando todos los registros de la tabla por medio del modelo
        $citas = Cita::all();
        if(is_null($citas) || $citas == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($citas,$code);
    }

    public function miscitas(Request $request)
    {
        $cliente_id = $request->input('cliente_id');
        $citas = Cita::where('cliente_id', $cliente_id)
                        ->where('estado', "Pendiente")
                        ->orWhere('estado', 'Agendada')
                        ->join('tipo_citas', 'citas.tipocita_id', '=', 'tipo_citas.id')
                        ->join('mascotas', 'citas.mascota_id', '=', 'mascotas.id')
                        ->get();
        if(is_null($citas) || $citas == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($citas,$code);
    }

    public function citaspasadas(Request $request)
    {
        $cliente_id = $request->input('cliente_id');
        $citas = Cita::where('cliente_id', $cliente_id)
                        ->where('estado', "Finalizada")
                        ->join('tipo_citas', 'citas.tipocita_id', '=', 'tipo_citas.id')
                        ->join('mascotas', 'citas.mascota_id', '=', 'mascotas.id')
                        ->get();
        if(is_null($citas) || $citas == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($citas,$code);
    }

    public function citasdisponibles()
    {
        $citas = Cita::select('*', 'citas.id as citaid')
                        ->where('estado', "Pendiente")
                        ->join('tipo_citas as t', 'citas.tipocita_id', '=', 't.id')
                        ->join('mascotas as m', 'citas.mascota_id', '=', 'm.id')
                        ->join('usuarios as u', 'citas.cliente_id', '=', 'u.id')
                        ->orderBy("citas.fecha")
                        ->orderBy("citas.hora")
                        ->get();

        if(is_null($citas) || $citas == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($citas,$code);
    }

    public function citasagendadas(Request $request)
    {   
        $empleado_id = $request->input('empleado_id');
        $citas = Cita::select('*', 'citas.id as citaid', 'm.nombre as mascotanombre')
                        ->where('estado', "Agendada")
                        ->where('empleado_id', $empleado_id)
                        ->join('tipo_citas as t', 'citas.tipocita_id', '=', 't.id')
                        ->join('mascotas as m', 'citas.mascota_id', '=', 'm.id')
                        ->join('usuarios as u', 'citas.cliente_id', '=', 'u.id')
                        ->orderBy("citas.fecha")
                        ->orderBy("citas.hora")
                        ->get();

        if(is_null($citas) || $citas == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($citas,$code);
    }

    public function agendarcita(Request $request)
    {
        $empleado_id = $request->input('empleado_id');
        $cita_id = $request->input('cita_id');

        $cita = Cita::find($cita_id);
        $cita->empleado_id = $empleado_id;
        $cita->estado = "Agendada";

        if($cita->save()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);
    }

    public function store(Request $request)
    {
        //creando obj del modelo Empleado para guardar nuevo registro
        $cita = new Cita();
        //asignando datos del request al objeto
        $cita->fecha = date('Y-m-d',strtotime($request->input('fecha')));
        $cita->hora = $request->input('hora');
        $cita->motivo = $request->input('motivo');
        $cita->estado = "Pendiente";
        $cita->detalles = "Ninguno";
        $cita->tipocita_id = $request->input('tipocita');
        $cita->cliente_id = $request->input('cliente_id');
        $cita->empleado_id = 1;
        $cita->mascota_id = $request->input('mascota');
        //guardando cita
        if($cita->save()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);

    }

    public function show($id)
    {
        $cita = Cita::find($id);
        return json_encode($cita);
    }

    public function update(Request $request, $id)
    {
        //seleccionando registro segun id para modifircarlo
        $cita =Cita::find($id);
        //asignando datos del request al objeto
        $cita->id_cliente = $request->input('id_cliente');
        $cita->nombre_mascota = $request->input('nombre_mascota');
        $cita->fecha_cita = $request->input('fecha_cita');
        $cita->hora = $request->input('hora');
        $cita->tipo_cita = $request->input('tipo_cita');
        $cita->especificaciones = $request->input('especificaciones');
        $cita->estado = $request->input('estado');
        $cita->id_empleado = $request->input('id_empleado');
        $cita->id_formulario = $request->input('id_formulario');
        //guardando cambios en el registro
        if($cita->save()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);
    }

    public function destroy($id)
    {
        //buscando registro por id
        $cita = Cita::find($id);
        if($cita->delete()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);
    }
}
