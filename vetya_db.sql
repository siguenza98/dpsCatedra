-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-11-2020 a las 04:33:09
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vetya_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asuetos`
--

CREATE TABLE `asuetos` (
  `id` int(10) UNSIGNED NOT NULL,
  `fecha` date NOT NULL,
  `empleado_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `id` int(10) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `nombre_mascota` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_cita` date NOT NULL,
  `hora` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo_cita` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `especificaciones` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_empleado` int(11) NOT NULL,
  `id_formulario` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(10) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `correo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto_perfil` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `categoria` char(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `correo`, `foto_perfil`, `telefono`, `password`, `categoria`, `created_at`, `updated_at`) VALUES
(1, 'adonis', 'adoniscortez98@hotmail.com', NULL, NULL, NULL, NULL, '2020-10-16 02:32:44', '2020-10-16 02:32:44'),
(3, NULL, 'ab@ab.com', NULL, NULL, NULL, NULL, '2020-10-16 06:24:18', '2020-10-16 06:24:18'),
(5, NULL, 'as@as.com', NULL, NULL, NULL, NULL, '2020-10-17 09:04:51', '2020-10-17 09:04:51'),
(6, 'adprueba', 'adprueba@mail.com', NULL, '1234-5678', NULL, NULL, '2020-10-19 01:28:58', '2020-10-19 01:28:58'),
(12, 'David garcia', 'davidg@hotmail.com', NULL, '12345678', NULL, NULL, '2020-11-20 07:52:00', '2020-11-20 07:52:00'),
(13, 'Javier Caceres', 'javic@hotmail.com', NULL, '12345678', NULL, NULL, '2020-11-20 07:52:39', '2020-11-20 07:52:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diagnosticos`
--

CREATE TABLE `diagnosticos` (
  `id` int(10) UNSIGNED NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `nombre_mascota` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `especie` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `raza` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `edad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vacunacion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `motivo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `vacunas_realizadas` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `peso` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pulso` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `temperatura` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `diagnostico_final` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tratamiento` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `empleado_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(10) NOT NULL,
  `nombres` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto_perfil` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `categoria` char(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombres`, `apellidos`, `correo`, `foto_perfil`, `telefono`, `password`, `categoria`, `created_at`, `updated_at`) VALUES
(1, 'Roberto', 'arevalo', 'admin@petya.com', '', '2345-6789', '', 'A', NULL, NULL),
(2, 'Jose', 'martinez', 'empleado1@petya.com', '', '2145-6798', '', 'E', NULL, NULL),
(3, 'Alfredo', 'gomez', 'empleado2@petya.com', NULL, '1234-7898', NULL, 'E', '2020-10-17 02:33:19', '2020-10-17 02:33:19'),
(4, 'Andres', 'apell2', 'empleado3@petya.com', NULL, '1234-5678', NULL, 'R', '2020-10-17 02:38:02', '2020-10-18 02:39:31'),
(5, 'a', 'a', 'a@a.com', NULL, '1234-5678', NULL, 'E', '2020-10-17 02:39:31', '2020-11-20 08:40:27'),
(10, 'prueba44', 'prueba44', 'adonis@gmail.com', NULL, '1234-2345', NULL, 'R', '2020-10-17 10:31:58', '2020-10-18 23:40:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario_citas`
--

CREATE TABLE `formulario_citas` (
  `id` int(10) NOT NULL,
  `fecha_cita` date NOT NULL,
  `hora` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre_mascota` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `especie` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `raza` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `edad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vacunacion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `motivo` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vacunas_realizadas` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_empleado` int(11) NOT NULL,
  `peso` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pulso` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `temperatura` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cliente_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `dia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hora_inicio` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hora_fin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `empleado_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `horarios`
--

INSERT INTO `horarios` (`id`, `dia`, `hora_inicio`, `hora_fin`, `empleado_id`, `created_at`, `updated_at`) VALUES
(2, 'Lunes', '9:00', '10:00', 2, NULL, '2020-10-18 07:05:15'),
(5, 'Martes', '9:00', '10:00', 2, '2020-11-20 07:24:02', '2020-11-20 07:24:02'),
(6, 'Lunes', '10:00', '11:00', 3, '2020-11-20 07:24:43', '2020-11-20 07:24:43'),
(7, 'Martes', '10:00', '11:00', 3, '2020-11-20 07:24:58', '2020-11-20 07:24:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(2, '2020_10_13_232632_create_clientes_table', 1),
(3, '2020_10_13_235220_create_formulario_citas_table', 2),
(4, '2020_10_14_002610_create_empleados_table', 3),
(5, '2020_10_14_010237_create_citas_table', 4),
(6, '2020_10_14_021019_create_diagnosticos_table', 5),
(7, '2020_10_14_022353_create_horarios_table', 6),
(8, '2020_10_14_022916_create_asuetos_table', 7);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asuetos`
--
ALTER TABLE `asuetos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `empleado_id` (`empleado_id`);

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_formulario` (`id_formulario`),
  ADD KEY `id_empleado` (`id_empleado`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `diagnosticos`
--
ALTER TABLE `diagnosticos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `empleado_id` (`empleado_id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `formulario_citas`
--
ALTER TABLE `formulario_citas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cliente_id` (`cliente_id`),
  ADD KEY `cliente_id_2` (`cliente_id`);

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `empleado_id` (`empleado_id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asuetos`
--
ALTER TABLE `asuetos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `diagnosticos`
--
ALTER TABLE `diagnosticos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `formulario_citas`
--
ALTER TABLE `formulario_citas`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `horarios`
--
ALTER TABLE `horarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asuetos`
--
ALTER TABLE `asuetos`
  ADD CONSTRAINT `asuetos_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `citas_ibfk_1` FOREIGN KEY (`id_formulario`) REFERENCES `formulario_citas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `citas_ibfk_2` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id`);

--
-- Filtros para la tabla `diagnosticos`
--
ALTER TABLE `diagnosticos`
  ADD CONSTRAINT `diagnosticos_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`);

--
-- Filtros para la tabla `formulario_citas`
--
ALTER TABLE `formulario_citas`
  ADD CONSTRAINT `formulario_citas_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD CONSTRAINT `horarios_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
