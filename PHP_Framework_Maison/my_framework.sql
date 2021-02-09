-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  Dim 01 oct. 2017 à 21:58
-- Version du serveur :  10.1.21-MariaDB
-- Version de PHP :  5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `my_framework`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `titre` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `author` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `titre`, `content`, `author`) VALUES
(4, 'Les bon bails', 'un livre a succes', 'akecelo'),
(5, 'Razlesbails', 'Les razmokets mon frÃ¨re ils soooont lÃ Ã Ã ', 'akeuucelo'),
(6, 'Razazzaazlesbails', 'Les razmokets zazazamon frÃ¨re ils soooont lÃ Ã Ã ', 'akeuuazazcelo'),
(7, 'Combaya', 'Le livre de la jungle', 'Charles'),
(8, 'Combaya', 'Le livre de la jungle', 'Cahrloyu');

-- --------------------------------------------------------

--
-- Structure de la table `routing`
--

CREATE TABLE `routing` (
  `url` text NOT NULL,
  `real_path` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `routing`
--

INSERT INTO `routing` (`url`, `real_path`) VALUES
('connexion', 'default/connexion');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_membre` int(11) NOT NULL,
  `login` varchar(50) NOT NULL,
  `pwd` varchar(120) NOT NULL,
  `email` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_membre`, `login`, `pwd`, `email`) VALUES
(2, 'Mario', '80a9fd51ab4b704723ce49c110a3abf7f49f789d', 'Prompiprompa@hotmail.mario'),
(3, 'Mario', '80a9fd51ab4b704723ce49c110a3abf7f49f789d', 'Prompiprompa@hotmail.mario'),
(4, 'Mario', '80a9fd51ab4b704723ce49c110a3abf7f49f789d', 'Prompiprompa@hotmail.mario');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_membre`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_membre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
