<?php

namespace App\Http\Controllers;

use App\Models\Mascota;
use Illuminate\Http\Request;


class MascotaController extends Controller
{
    public function mismascotas(Request $request)
    {
        //seleccionando todos los registros de la tabla por medio del modelo
        $idDueño = $request->input('usuario_id');

        $mascotas = Mascota::where('usuario_id', $idDueño)->get();
        if (is_null($mascotas) || $mascotas == '') {
            //$respuesta = ['resultado'=>'NO'];
            $code = 204; //peticion sin contenido
        } else {
            //$respuesta = ['resultado'=>'OK'];
            $code = 200; //peticion con exito
        }

        //retornando json para frontend
        return response()->json($mascotas, $code);
    }

    public function store(Request $request)
    {
        //creando obj del modelo Empleado para guardar nuevo registro
        $mascota = new Mascota();
        //asignando datos del request al objeto
        $mascota->nombre = $request->input('nombre');
        $mascota->especie = $request->input('especie');
        $mascota->raza = $request->input('raza');
        $mascota->edad = $request->input('edad');
        $mascota->sexo = $request->input('sexo');
        $mascota->color = $request->input('color');
        $mascota->peso = $request->input('peso');
        $mascota->usuario_id = $request->input('usuario_id');
        $mascota->vacunas = "Ninguna";

        //guardando cita
        if ($mascota->save()) {
            $respuesta = ['resultado' => 'OK'];
            $code = 200; //peticion con exito
        } else {
            $respuesta = ['resultado' => 'NO'];
            $code = 400; //peticion sin exito
        }
        return response()->json($respuesta, $code);
    }

    public function update(Request $request, $id)
    {
        //creando obj del modelo Empleado para guardar nuevo registro
        $mascota =  Mascota::find($id);
        //asignando datos del request al objeto
        $mascota->nombre = $request->input('nombre');
        $mascota->especie = $request->input('especie');
        $mascota->raza = $request->input('raza');
        $mascota->edad = $request->input('edad');
        $mascota->sexo = $request->input('sexo');
        $mascota->color = $request->input('color');
        $mascota->peso = $request->input('peso');
        $mascota->usuario_id = $request->input('usuario_id');
        $mascota->vacunas = "Ninguna";

        //guardando cita
        if ($mascota->save()) {
            $respuesta = ['resultado' => 'OK'];
            $code = 200; //peticion con exito
        } else {
            $respuesta = ['resultado' => 'NO'];
            $code = 400; //peticion sin exito
        }
        return response()->json($respuesta, $code);
    }
}
