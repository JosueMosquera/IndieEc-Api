-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-09-2022 a las 21:34:27
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `indieecapi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `artist`
--

CREATE TABLE `artist` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `artist_name` varchar(255) NOT NULL,
  `gender_music` varchar(255) NOT NULL,
  `birth_place` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `artist`
--

INSERT INTO `artist` (`id`, `email`, `username`, `password`, `name`, `last_name`, `artist_name`, `gender_music`, `birth_place`, `description`) VALUES
(1, 'jat.@hotmail.com', 'artist', 'artista123', 'artista', 'asdfasd', 'fsd', 'musica', 'Quito', 'afasdfas12334');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `artist_catalogue`
--

CREATE TABLE `artist_catalogue` (
  `id` int(11) NOT NULL,
  `artistId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `artist_catalogue`
--

INSERT INTO `artist_catalogue` (`id`, `artistId`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `description` varchar(2500) NOT NULL,
  `price` float NOT NULL,
  `stock` int(11) NOT NULL,
  `artistCatalogueId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `code`, `description`, `price`, `stock`, `artistCatalogueId`) VALUES
(1, 'gorra gris', 'g-45', 'gorra gris de buena calidad', 8, 5, 1),
(2, 'gorra gris', 'g-45', 'gorra gris de buena calidad', 9, 5, 1),
(3, 'gorra gris', 'g-45', 'gorra gris de buena calidad', 10, 5, 1),
(4, 'gorra gris', 'g-45', 'gorra gris de buena calidad', 3.2, 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_rols_role`
--

CREATE TABLE `users_rols_role` (
  `usersId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `artist`
--
ALTER TABLE `artist`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_66b179caee88b4a3f0bb46533d` (`email`),
  ADD UNIQUE KEY `IDX_ad916e8f555df362cbde837513` (`username`);

--
-- Indices de la tabla `artist_catalogue`
--
ALTER TABLE `artist_catalogue`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `REL_1e0f048e70c5734204845a6bc6` (`artistId`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_629c37a359ec2f6dd24c3789ac9` (`artistCatalogueId`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`);

--
-- Indices de la tabla `users_rols_role`
--
ALTER TABLE `users_rols_role`
  ADD PRIMARY KEY (`usersId`,`roleId`),
  ADD KEY `IDX_26b7260e9c26d6682c7a6bf922` (`usersId`),
  ADD KEY `IDX_3c36bf5ab866956fe2de34a638` (`roleId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `artist`
--
ALTER TABLE `artist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `artist_catalogue`
--
ALTER TABLE `artist_catalogue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `artist_catalogue`
--
ALTER TABLE `artist_catalogue`
  ADD CONSTRAINT `FK_1e0f048e70c5734204845a6bc6f` FOREIGN KEY (`artistId`) REFERENCES `artist` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_629c37a359ec2f6dd24c3789ac9` FOREIGN KEY (`artistCatalogueId`) REFERENCES `artist_catalogue` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `users_rols_role`
--
ALTER TABLE `users_rols_role`
  ADD CONSTRAINT `FK_26b7260e9c26d6682c7a6bf9220` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_3c36bf5ab866956fe2de34a638c` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
