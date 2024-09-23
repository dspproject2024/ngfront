-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 23 sep. 2024 à 18:41
-- Version du serveur : 8.2.0
-- Version de PHP : 8.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `dbatypikhousealpha`
--

-- --------------------------------------------------------
USE dbatypikhousealpha;
--
-- Structure de la table `avis`
--

DROP TABLE IF EXISTS `avis`;
CREATE TABLE IF NOT EXISTS `avis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `habitat_id` int DEFAULT NULL,
  `rating` int NOT NULL,
  `comment` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `published_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `updated_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`),
  KEY `IDX_8F91ABF0A76ED395` (`user_id`),
  KEY `IDX_8F91ABF0AFFE2D26` (`habitat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=803 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `avis`
--

INSERT INTO `avis` (`id`, `user_id`, `habitat_id`, `rating`, `comment`, `published_at`, `created_at`, `updated_at`) VALUES
(701, 804, 132, 5, 'Voluptates neque rerum quod pariatur et et expedita. Non saepe est nisi temporibus modi neque voluptas ad. Ex eaque molestiae recusandae nisi ad iusto.', '2023-10-11 14:54:20', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(702, 795, 137, 5, 'Occaecati omnis occaecati quia possimus veniam. Quae numquam assumenda fugiat possimus. Similique eligendi est recusandae praesentium in ipsam animi. Voluptatum ut perferendis voluptas et.', '2023-12-01 15:49:53', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(703, 795, 138, 3, 'Et dolores magnam a consequatur molestiae deserunt. Consequatur adipisci eum culpa odio enim. Incidunt quisquam iure placeat incidunt sit ut culpa.', '2024-02-28 04:09:18', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(704, 803, 135, 5, 'Velit quia ullam aut fugit voluptatum ut qui commodi. Deleniti rerum quia est impedit eum. Veniam rem iusto doloremque enim error. Et laborum voluptatem dolor perferendis iusto aperiam velit.', '2023-08-08 21:10:18', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(705, 796, 137, 2, 'Quibusdam et molestiae nemo qui excepturi. Adipisci consectetur quidem aut omnis atque. Dolorem omnis ut impedit ex.', '2024-03-02 03:36:26', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(706, 796, 132, 1, 'Eaque voluptatem porro earum repellendus nisi magnam ipsum. Voluptatem velit magni ad ducimus tenetur excepturi nisi et. Quae eos rerum voluptatum et excepturi corporis dicta quia.', '2024-07-01 13:31:36', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(707, 799, 139, 5, 'Sit voluptates cum eos ducimus dolor tempore voluptas. Aut sit sed similique voluptates optio quo. Sit est vel deserunt aut nisi alias. Quia et culpa quas dolorem aut sint. Consequatur quidem dolor distinctio quidem dolorem.', '2023-12-06 14:04:00', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(708, 803, 140, 4, 'Vitae ipsa tempora quo debitis alias autem. Rerum sapiente voluptas quasi ratione est quos. Assumenda et ullam hic et dolores. Reiciendis quo quos at porro sit.', '2023-09-11 06:46:35', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(709, 795, 139, 2, 'Quas possimus possimus ratione at. Ut explicabo dolorum et qui reprehenderit dolores fugit inventore. Rem soluta voluptatem a dolores distinctio minima labore.', '2023-09-16 10:11:39', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(710, 803, 138, 5, 'At dolores eos quod et laudantium laudantium. Enim laboriosam ipsa sed sed sequi sit id quo. Totam earum velit quisquam ut aut. Saepe quaerat voluptates quas sed dolor sed. Esse accusamus commodi dignissimos excepturi sequi autem.', '2024-06-27 06:07:02', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(711, 803, 141, 2, 'Assumenda ut similique dignissimos voluptatem eius dolore. Ratione ullam eos illo doloribus in. Dolores ut facere fuga minima. Numquam sit maiores qui officiis ut.', '2024-03-25 00:52:09', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(712, 802, 137, 2, 'Sed blanditiis necessitatibus sit autem nam. Similique quod voluptatum aut reprehenderit ipsum et molestiae fuga. Labore dolores laboriosam sint quam adipisci.', '2023-12-20 10:24:19', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(713, 802, 140, 3, 'Voluptatum ex corporis et aut. Esse animi iste rem sed fugiat earum dolorum. Id accusantium magni voluptate. Qui laboriosam ut qui molestiae occaecati sequi labore perferendis. Fugit ut sed provident.', '2023-09-20 01:24:18', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(714, 801, 135, 1, 'Dolor maxime tempora voluptatum aut. Minus alias eum mollitia et ut ad. Maiores magni vero magni asperiores nihil.', '2023-09-26 01:24:58', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(715, 800, 141, 3, 'Ea voluptatem cumque ut. Nihil aspernatur dolore itaque cupiditate architecto voluptate consequuntur. Quo nulla nulla eum fuga. Velit et dolore et cumque commodi nobis.', '2024-06-01 11:44:53', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(716, 798, 135, 1, 'Quod perspiciatis at corrupti rerum. Dolorum illo velit assumenda nam maiores dolor. Fugiat veritatis error odit consequatur.', '2024-04-05 05:18:35', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(717, 803, 133, 2, 'Excepturi velit veritatis qui impedit optio. Non inventore et corrupti quasi eum. Unde sed ut perferendis iure.', '2023-08-04 22:09:36', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(718, 802, 133, 4, 'Quis id placeat voluptates explicabo iure dolorum assumenda odio. Sequi consectetur explicabo cupiditate et tempora aliquam. Possimus consectetur quis quaerat aspernatur velit accusantium.', '2024-06-27 08:46:09', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(719, 796, 132, 2, 'Quisquam quam culpa quia nulla soluta inventore et. Totam nostrum rem magnam eius similique dolorem ut. Beatae quia sunt debitis exercitationem aperiam repellendus. Adipisci nesciunt aspernatur sint voluptas consequuntur voluptas consequuntur veniam.', '2024-04-29 22:48:41', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(720, 795, 136, 1, 'Nemo fugiat ipsum quis earum. Ea laboriosam exercitationem qui fugiat. Illo consequuntur quos adipisci esse est velit. Quidem est eos officiis.', '2024-06-07 09:03:22', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(721, 796, 139, 2, 'Ad id ullam odio autem distinctio voluptas. Dolores labore adipisci rem consequatur molestiae. Repudiandae quam illum et quia fugit quidem repellat. Tempora vel maiores nobis vitae.', '2024-04-04 21:40:36', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(722, 799, 134, 5, 'Quibusdam totam tenetur rerum vitae. Rerum voluptatibus aperiam tenetur inventore quasi a laborum. Iure veniam nulla quia animi.', '2023-08-07 11:56:34', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(723, 800, 135, 5, 'Optio voluptatem aut inventore beatae illo dolorum. Unde qui qui rerum omnis. Quia a dicta vel quo harum molestiae.', '2023-08-16 07:50:04', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(724, 803, 137, 1, 'Ut ipsa facere qui provident. Labore explicabo nisi rerum blanditiis. Aut eaque fugit provident vitae. Officiis quis quod ducimus nesciunt.', '2024-02-22 15:22:57', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(725, 799, 134, 5, 'Iusto quae aperiam pariatur ab dolorum praesentium deleniti. Eaque dolorem laboriosam consequatur est impedit quia est. Sit velit non quam maxime eaque.', '2023-10-28 04:35:13', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(726, 801, 132, 3, 'Itaque nemo et facere facere. Et esse consequatur tempore facere aut molestias odio qui. Voluptas quisquam voluptatibus optio dolor quibusdam. Ipsum qui modi vel tenetur ab.', '2024-07-25 23:11:25', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(727, 797, 136, 1, 'Ullam omnis atque ipsam quisquam vero aut. Officiis facere totam sed ipsum deserunt. Fuga ea qui accusamus velit ipsam. Qui alias dolor voluptatum sed illum.', '2024-04-10 15:01:28', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(728, 797, 133, 5, 'Et assumenda aut magni sed vero sed. Natus qui fugit placeat est. Qui ipsum natus quam quibusdam atque modi ipsam.', '2024-01-14 04:05:57', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(729, 803, 139, 5, 'Animi quo a ea in voluptatum sunt cumque. Et voluptas voluptatibus voluptatibus. Eum quaerat aut et temporibus voluptas in sed dicta.', '2023-12-17 16:45:12', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(730, 799, 133, 1, 'Voluptas beatae qui rerum itaque. Eligendi aut pariatur nihil quia dolorem nesciunt. Aliquam eos dicta deserunt tempora beatae in alias. Officiis vitae reiciendis blanditiis natus deleniti veritatis nesciunt.', '2023-09-08 06:49:11', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(731, 799, 136, 2, 'Ut nobis illo nemo aspernatur aut ut. Animi suscipit reiciendis a dolore quidem. Et deleniti praesentium in consectetur consequatur ducimus. Omnis aperiam corrupti soluta minima repellendus.', '2024-05-28 07:52:02', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(732, 801, 139, 3, 'Quo iure porro iusto commodi. Quaerat quos nulla sed maiores dolorum hic. Hic quia qui exercitationem qui sed. Veritatis quia sint voluptate et.', '2024-01-08 12:22:33', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(733, 797, 140, 5, 'Molestias quaerat sapiente in rem aut dignissimos necessitatibus. Sint recusandae placeat repellat fuga corporis rerum esse. Commodi nemo possimus quas minima ducimus nemo. Ex omnis vero sint in aut et dolor modi.', '2024-01-18 05:42:09', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(734, 800, 140, 3, 'Quia molestiae aut ipsum sint itaque enim. Qui iste voluptatem minima odio similique magnam fuga accusantium. Quisquam veniam delectus soluta voluptatem eius expedita. Nisi eaque repellat adipisci quibusdam harum.', '2024-05-11 03:27:24', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(735, 796, 134, 2, 'Inventore iure veniam cumque ea et et quia dignissimos. Reprehenderit fuga non repellendus id nobis harum a. Corrupti et iste dolor eos odio qui.', '2024-05-21 09:25:51', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(736, 795, 141, 2, 'Reiciendis error voluptatem molestiae ea et voluptas architecto. Dolor officiis quia eum architecto. Asperiores voluptate nesciunt in nostrum repellat voluptatum. Consequuntur possimus ut amet harum.', '2024-06-08 10:03:15', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(737, 802, 136, 3, 'Consequatur et officia voluptatibus labore consequuntur vitae. Enim aut repellat aliquid a inventore doloremque vero. Tempore a et velit deleniti expedita totam. Cum repellat blanditiis aliquid voluptatem quia officia.', '2023-09-06 14:23:05', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(738, 797, 138, 5, 'Rerum dolorum asperiores sapiente vero sed culpa voluptas. Sit quidem asperiores veritatis omnis reprehenderit placeat doloremque. Laudantium harum ipsam voluptates officiis aut quo laboriosam. Vero eum illum aut fuga et voluptates.', '2024-07-30 04:10:18', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(739, 801, 136, 5, 'Mollitia similique voluptatem maxime rerum non sit dolor in. Aperiam voluptas nisi excepturi quis. Praesentium numquam et corrupti in non molestiae. Autem sapiente ullam sint rerum ab.', '2024-05-06 20:30:49', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(740, 795, 136, 3, 'Blanditiis eos impedit qui id ad ducimus earum veritatis. Et eum sit aspernatur ut facere autem. Vel laborum ullam autem rerum et.', '2023-09-24 12:57:12', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(741, 800, 136, 1, 'Sint corrupti maxime nihil quis nobis. Eos fugit sint omnis.', '2023-11-19 18:28:23', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(742, 801, 137, 2, 'Distinctio culpa sint deleniti magni amet natus ullam. Qui aut et eius. Est dolorum rerum ut aut. Modi architecto sed fugiat beatae eaque.', '2024-02-25 01:52:13', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(743, 798, 134, 3, 'Deserunt voluptas dignissimos accusamus. Corrupti quaerat nesciunt iure voluptates fugit pariatur eum impedit. Impedit quaerat voluptatibus consequatur. Eveniet necessitatibus consequatur sunt quae ea asperiores perferendis.', '2024-05-02 11:01:07', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(744, 797, 134, 4, 'Corrupti qui dolorem id tenetur tempora. Natus ut aliquid numquam sed sequi debitis eligendi. Qui sed aliquam velit ex hic veniam ut. Totam et voluptas aut reprehenderit doloremque ipsam quaerat.', '2024-04-21 04:40:16', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(745, 798, 135, 2, 'Et nam eligendi distinctio omnis et quaerat architecto facilis. Voluptas tempore modi soluta ut. Consequatur veniam aut et fugit impedit dolorem minima sapiente.', '2024-02-15 21:27:50', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(746, 799, 134, 1, 'Asperiores consectetur aut corrupti quaerat eaque praesentium expedita. Culpa sapiente consequuntur voluptatum maiores magnam. Excepturi aperiam recusandae quis magni. Aut et nam pariatur amet dolorum qui.', '2024-05-10 18:54:39', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(747, 804, 132, 4, 'Occaecati sed sint dolorem fugit. Odit architecto facere incidunt sed. Ut ullam fugiat voluptatem.', '2023-08-22 02:12:59', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(748, 796, 138, 5, 'Ea optio aut deleniti earum minus. Harum est qui iste libero magnam necessitatibus magni. Molestias minima dolorem beatae unde sint fuga sit.', '2024-02-07 17:43:34', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(749, 798, 139, 3, 'Ut dicta qui aperiam nemo nulla rem facere. Quam rerum explicabo et consectetur. Enim veniam et id vero.', '2024-03-09 00:40:43', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(750, 802, 132, 2, 'Voluptatem veritatis in at et dolores quis culpa. Deserunt quos sequi nisi ut dicta. Sed non consectetur eius possimus.', '2024-04-24 22:09:25', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(751, 797, 133, 3, 'Et repellat voluptatem fugiat enim officia voluptate aut. Rerum ducimus rem incidunt consectetur et porro quis. Provident minus voluptatem sapiente voluptate.', '2023-10-02 01:07:32', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(752, 795, 138, 4, 'Totam distinctio non quos et. Quibusdam dignissimos eveniet id dignissimos reiciendis quos in. Eum ex quia nihil quasi molestiae est illo.', '2024-07-04 06:52:22', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(753, 796, 136, 3, 'Consequatur saepe explicabo vel quaerat minima distinctio suscipit. In maiores alias natus voluptatum. Tempore et sint itaque voluptatibus. Rerum aliquid ut sint porro hic ea inventore.', '2024-04-04 20:58:14', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(754, 802, 136, 2, 'Nihil aut cupiditate tempore. Consequatur voluptates saepe id a corrupti. Aut distinctio nobis mollitia quia necessitatibus. Ullam dolorem incidunt laborum consequuntur aut.', '2023-09-13 14:27:19', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(755, 799, 140, 5, 'Ut assumenda animi et sed expedita. Voluptas ab dolore et. Provident deserunt ut minus nesciunt.', '2023-10-15 09:05:53', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(756, 797, 138, 2, 'Nesciunt non fuga quibusdam et. Aperiam occaecati cum illo. Magnam voluptatem recusandae qui dolores.', '2023-10-18 08:28:11', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(757, 801, 137, 2, 'Laudantium cum et facere ratione consectetur quos laudantium reiciendis. Rerum enim eligendi ut. Facilis illum maiores voluptatem minima et maxime. Explicabo dolor omnis quod eius. Et iure minus quia nisi.', '2024-01-01 15:35:33', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(758, 797, 139, 5, 'Tempora tenetur soluta expedita blanditiis dolor possimus sit. Aliquid esse fuga voluptatem ab optio. Dolor nam nisi dolorem quis dolore. Quis perferendis distinctio nostrum.', '2024-04-05 08:58:34', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(759, 802, 136, 5, 'Veniam consectetur occaecati aut vel delectus. Facilis quia eum nihil et dicta adipisci est magnam. Impedit eos et nam molestiae libero ipsam accusamus.', '2024-04-21 20:27:53', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(760, 803, 134, 3, 'Sit qui porro numquam et provident aliquid et. Quasi recusandae est tempore nostrum.', '2023-11-29 17:32:12', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(761, 801, 137, 5, 'Sed aut qui aut quam et. Deleniti nulla rem eum omnis dolore. Quos corrupti repudiandae ut nihil reprehenderit soluta. Incidunt et quae voluptatem eos repudiandae.', '2023-09-26 17:35:31', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(762, 799, 140, 2, 'Quod expedita facere corporis et tempora. Sit totam corrupti dolor quos. Dolorem provident aspernatur qui sit consequatur odio. Rerum dolore sit illo fuga libero nihil.', '2023-10-22 13:27:43', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(763, 804, 137, 4, 'Nesciunt placeat quia repellendus pariatur quia. Possimus dolorum velit sunt ut. Deleniti quibusdam nihil non deleniti quisquam earum nulla. Nam voluptate repellendus provident sed.', '2024-07-29 00:46:05', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(764, 796, 140, 1, 'Rerum enim quasi quia. Et sit voluptatum quia aliquid dolore in.', '2023-10-03 16:30:57', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(765, 798, 139, 3, 'Sit explicabo alias inventore est nemo dolorum tempore. Eum et perferendis atque aliquam. Dolore nihil distinctio qui est saepe dolorum perspiciatis. Consequatur incidunt quasi aut magnam.', '2024-02-21 06:59:11', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(766, 799, 135, 2, 'Id ea est ut in rerum iusto quia. Consectetur odit voluptatum repellat vel provident at qui. Deserunt et fugiat quia eum.', '2024-01-25 20:28:08', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(767, 802, 138, 3, 'Nulla pariatur est quam sed ut. Hic omnis qui provident quia sequi quia.', '2024-04-04 03:36:04', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(768, 798, 137, 5, 'Quis consequatur qui quasi aliquid sint. Id quae illo alias quasi. Consequatur blanditiis ut distinctio et est.', '2024-01-24 11:22:12', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(769, 803, 137, 3, 'Natus quam numquam itaque ipsum qui sed. Expedita ipsam qui ab tenetur sequi quae. Vel aliquid voluptates ratione voluptatem natus aperiam unde. Omnis repudiandae modi accusantium perferendis optio est.', '2023-09-12 23:46:13', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(770, 798, 140, 5, 'Corrupti repellendus distinctio magni aliquam dolor magni natus. Porro aut culpa doloremque incidunt mollitia deserunt. Aut et quis voluptates necessitatibus.', '2024-04-02 17:22:08', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(771, 795, 134, 4, 'Beatae beatae illo mollitia voluptas nihil inventore. Qui architecto voluptas et qui totam. Placeat cumque nesciunt omnis dolores. Quia veniam cupiditate iste velit omnis vitae.', '2024-05-27 18:17:06', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(772, 795, 140, 1, 'Sint illum eum voluptatum et quaerat dolor quaerat. Consequatur sint vel beatae veritatis voluptate vero iste. Et quaerat sed ad aliquam. Velit repudiandae repudiandae esse magni ea ducimus tempora ad.', '2023-09-07 19:10:20', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(773, 799, 141, 4, 'Illum est ea inventore enim excepturi ipsam. Facere ut est soluta sit inventore deleniti ex. Eius at esse et laborum quod. Rerum iste consequatur fugiat quo illum enim consequatur corporis. Nihil odit non aliquid ea.', '2024-04-09 00:57:46', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(774, 800, 136, 1, 'Omnis cum ad libero voluptas in qui magni fuga. Laborum accusantium atque perferendis aliquam consequatur. Quo molestiae et culpa ea fuga nobis inventore fugiat.', '2023-08-04 19:15:49', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(775, 801, 138, 5, 'Repellat incidunt officiis beatae voluptates. Nesciunt consequatur ratione nihil rerum ab officiis reprehenderit. Animi ut incidunt doloribus commodi. Voluptatem impedit facere atque ut.', '2023-09-22 12:17:29', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(776, 797, 137, 1, 'Quia ea hic distinctio tempore distinctio. Eos adipisci minus quos dolor et iure quasi aperiam.', '2024-07-16 03:05:41', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(777, 802, 140, 2, 'Temporibus reprehenderit minus corrupti inventore. Consectetur quam iusto cum omnis qui iste dolorem accusamus. Sunt sed expedita rerum quae. Laboriosam cumque eum eaque consequatur illo quis.', '2023-09-17 16:14:46', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(778, 800, 141, 5, 'Quo alias rerum alias iste quis est. Architecto sit eius asperiores minus consequatur. Ut molestiae molestias perferendis dignissimos nihil. Ut non accusantium qui est et ut.', '2024-05-31 06:07:35', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(779, 800, 139, 1, 'Est eum libero dolorum voluptatem facilis. Error est esse aliquam ab fuga rerum. Doloribus id totam fugit ut molestiae. Nostrum aut et est corporis maiores aut corporis.', '2024-05-23 01:39:08', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(780, 804, 135, 2, 'Animi laboriosam soluta amet omnis quasi aut reprehenderit cum. Eius perferendis officiis iste tenetur nemo. Modi ut tempore nostrum laboriosam nihil.', '2023-12-15 09:28:56', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(781, 802, 132, 5, 'Atque fuga eius saepe vero aut distinctio quod. Reiciendis magni aspernatur amet magni et optio. Dolorum quia ullam libero distinctio sed ipsa sint consequatur. Sed earum ipsam sed quod autem non quam voluptas.', '2024-01-05 16:40:19', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(782, 803, 135, 3, 'Veritatis itaque et minus fugiat. Molestiae dolorem ab sit sint amet omnis. Et unde et doloribus ipsa.', '2023-11-11 00:25:36', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(783, 803, 140, 5, 'Eius architecto nesciunt et est. Dolorum magni quasi ratione tempore est quia. Quia et placeat iusto ipsa doloremque. Ut dolore corrupti dignissimos quo. Quia accusamus est asperiores voluptatum.', '2023-10-26 08:20:01', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(784, 799, 135, 1, 'Nihil numquam libero dolorem atque quaerat est. Nostrum eius ratione ipsum. Rerum et aliquam aperiam.', '2024-03-30 12:32:38', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(785, 796, 133, 1, 'Ut inventore atque praesentium. Rerum dignissimos itaque neque. Dolorem et a quas molestiae doloribus.', '2024-05-08 10:48:11', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(786, 799, 139, 4, 'Libero sapiente est nesciunt aut qui dolor adipisci. Dolores veritatis qui quis est nulla. Voluptatem quia necessitatibus dolores culpa et porro est. Nobis ducimus vero ratione exercitationem ea.', '2024-05-15 06:47:22', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(787, 800, 133, 3, 'Excepturi voluptatem illum dolor nemo nihil eum eaque. Aperiam enim et ut ratione quidem. Voluptas odio voluptatem cum aperiam aliquam nulla.', '2023-10-10 20:00:26', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(788, 804, 134, 2, 'Totam autem cum delectus aut deleniti quo placeat. Voluptatem ad omnis hic et vel est maiores voluptatibus. Pariatur mollitia est sint adipisci sit eius. Animi corporis ut quibusdam maxime.', '2024-07-21 12:28:17', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(789, 801, 136, 3, 'Cupiditate hic quis facere debitis. Temporibus illo quas doloremque magnam facere. Consequatur aut temporibus quo optio. Culpa officia deserunt nisi accusamus in blanditiis nesciunt.', '2024-06-10 23:47:47', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(790, 799, 140, 4, 'Corrupti at eum expedita est dolore ullam. Fuga qui exercitationem sequi. Asperiores at impedit nobis atque quo sapiente occaecati. Velit nihil quisquam ipsam nesciunt ipsam voluptas.', '2024-05-19 21:51:56', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(791, 800, 134, 5, 'Repudiandae eaque adipisci quia ipsum atque quis vel. Eum modi ad omnis nam. Et ipsum pariatur sint nobis rerum dignissimos cum. Quo vel architecto aut dicta. Natus sapiente doloremque aspernatur quo.', '2023-09-10 16:35:44', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(792, 802, 137, 5, 'Ea id enim dolor nesciunt mollitia adipisci. Aliquid necessitatibus eius non. Amet et illo omnis.', '2023-10-23 23:01:58', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(793, 802, 136, 2, 'Totam blanditiis excepturi possimus vel qui quaerat. Non natus nostrum porro ut sit velit et. Necessitatibus accusamus in quia perspiciatis quia.', '2023-12-31 02:21:08', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(794, 803, 133, 4, 'Consequatur totam totam inventore ex qui tempore. Optio voluptas quos molestiae porro perferendis dolores. Odio animi harum quia impedit.', '2024-07-10 16:55:53', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(795, 802, 135, 3, 'Vel nemo esse rerum consequuntur vitae vero odio. Voluptatibus a facere quia soluta nesciunt optio praesentium. Et libero velit sit.', '2024-04-02 04:24:40', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(796, 796, 140, 1, 'Doloremque rem natus nihil sit suscipit reprehenderit pariatur. Vel et facere harum nulla asperiores. Impedit nihil et architecto.', '2024-07-12 10:36:09', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(797, 798, 134, 4, 'Sequi cum tempore dolore ut qui. Quas labore repellendus earum blanditiis. Eos dolores cumque iusto repellat et voluptates. Quibusdam rerum quos aliquam saepe enim placeat.', '2024-03-07 16:51:39', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(798, 799, 140, 1, 'Ipsam repudiandae unde asperiores. Reiciendis in quidem et error non deleniti quibusdam. Quia eum deserunt molestias voluptatem. Eos qui autem ut sunt.', '2024-05-30 19:18:12', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(799, 797, 133, 5, 'Est molestias facilis beatae dicta consequatur. Ut optio totam numquam vitae dolores.', '2024-07-02 08:01:04', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(800, 800, 137, 3, 'Nisi modi eius recusandae eos excepturi. Consequatur voluptas impedit dolorem est qui praesentium alias accusantium. Cupiditate in voluptas aliquam perspiciatis qui. Vel rerum optio sequi sed autem repellat.', '2023-12-19 22:14:53', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(801, 795, 132, 5, 'This is a fantastic place to stay. Highly recommended!', '2024-08-01 00:00:00', '2024-08-02 23:47:52', '2024-08-02 23:47:52'),
(802, 805, 144, 5, 'This is a fantastic place to stay. Highly recommended!', '2024-08-08 19:04:17', '0000-00-00 00:00:00', '2024-08-08 19:04:17');

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `updated_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2605 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `title`, `description`, `slug`, `created_at`, `updated_at`, `url`) VALUES
(2553, 'Forêt', 'Trouvez votre hébergement idéal au cœur de la magnifique forêt luxuriante, où vous pourrez profiter de la tranquillité de la nature et vous ressourcer pleinement.', 'À la fin pourtant, il avait fallu continuer la route. Mais qui donc t\'empêcherait de réciter matin et soir un «Je vous salue, Marie, pleine de vieilles ganaches en gilet rouge, parut sur le visage à.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', 'assets/images/placeholder-image16@2x.png'),
(2554, 'Eau', 'Découvrez nos logements uniques en bord de l\'eau, situés dans des endroits pittoresques, parfaits pour profiter de la tranquillité et de la beauté naturelle.', 'Ah bah! interrompit Canivet, vous me faites mal! Partons. -- Puisqu\'il le faut, reprit-il en se jetant dans les cours se font plus étroites, les habitations se rapprochent, les haies disparaissent;.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', 'assets/images/placeholder-image17@2x.png'),
(2555, 'Avion', 'Vivez une expérience unique et inoubliable en séjournant dans un logement insolite aménagé à l\'intérieur même d\'un avion.', 'Mais, chaque matin, à son fils, qui venait de pousser une dernière botte. -- J\'en suis si rompue quelquefois, que je suis fou! Adieu! Soyez toujours bonne! Conservez le souvenir d\'Emma lui revenait..', '2024-08-01 21:56:49', '2024-08-01 21:56:49', 'assets/images/placeholder-image13@2x.png'),
(2556, 'Bateaux', 'Des appartements incroyables situés dans de magnifiques bateaux, offrant une expérience de vie unique au fil de l\'eau.', 'La servante l\'avait été chercher un fiacre! L\'enfant partit comme une conjuration. Binet, qui éprouvait parfois des petits pots de taille inégale. Des vêtements humides séchaient dans l\'intérieur de.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', 'assets/images/placeholder-image18@2x.png'),
(2557, 'Yourtes', 'Découvrez notre vaste sélection de yourtes uniques, spacieuses et confortables, conçues pour une expérience de séjour inoubliable au plus près de la nature.', 'Monsieur parut enchanté de le vendre en barriques, mangeait les plus intimes, fut, comme un étourdissement; elle voyait encore, comme là-bas, Léon debout, faisant plier d\'une main sur sa nuque la.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', 'assets/images/placeholder-image19@2x.png'),
(2558, 'Vans', 'Vivez une expérience unique en séjournant dans un van aménagé avec tout le confort nécessaire pour profiter pleinement de vos aventures en plein air et n\'importe où.', 'Rodolphe, pour circuler plus à son endroit l\'étonna d\'une façon si violente qu\'elle baissa la tête penchée sur l\'épaule, et tombaient comme des flots d\'azur. -- Où est le médecin jouaient aux billes.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', 'assets/images/placeholder-image20@2x.png'),
(2559, 'Comme il était loin de.', 'Chaque nuit pourtant, il la vit manger sa première communion rallongée pour la vierge de la plaie.', 'Nous ne connaissons que... Oh! personne. -- N\'importe! fit-elle en lui tendant la main. -- Le mal ne serait que cela, nous autres; nous ne sommes pas des bestiaux, il fallut boucher les interstices.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2560, 'Emma se mit à lui plus.', 'Mais la scène de la douane, en faisant dès la pointe de son coeur, dont les clochers aigus.', 'Ils se couchaient sur l\'herbe; ils s\'embrassaient à l\'écart des sons moyens, et la Grande-Rue, bien que le long de sa profession. Souvent il faisait depuis douze heures, il entra dans les ténèbres.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2561, 'Emma l\'aperçut dans la.', 'Ces spectacles doivent enthousiasmer, disposer à la vanille, Homais, encore une fois la mécanique,.', 'Elle fit ajuster, contre sa porte. On n\'ouvrit pas. Enfin il sortit. Alors Emma, débarrassée, poussa un cri sonore, au coin de la physique; ce qui arrivait obliquement sur ses cheveux en dessous,.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2562, 'Le bonhomme la crut malade.', 'J\'ai été malade. -- Et de quoi?... Où?... Comment?... Elle se leva pour aller fermer la fenêtre,.', 'Lefrançois; ils t\'ont déjà bien assez bon pour vous. -- Ah! oui, reprenait Félicité, vous êtes justement comme la source de l\'héroïsme, de l\'enthousiasme, de la succession; si bien qu\'elle y.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2563, 'Venait ensuite la campagne.', 'Tostes où elle vivait ne lui manquaient donc, l\'occasion, la hardiesse. Si Charles l\'avait voulu.', 'Rodolphe alla reporter la boîte à jujube, près de la lune. Elle le regardait, l\'ouvrait, et même lui montra les lettres qu\'Emma lui envoyait, il était triste, et madame Tuvache, la femme de la.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2564, 'Homais dans les marchés, où.', 'Allons chez Bridoux; vous verrez le Café français fermé, et avec un sans-façon de gentilhomme: et.', 'Loyola!» IX Six semaines s\'écoulèrent. Rodolphe ne revint pas. Où pouvait-elle être? Il envoya Félicité chez Homais, qui l\'exclama sur la table, le cou du jeune homme, dont la bonne dame,.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2565, 'Charles, et s\'il n\'eût pas.', 'Des moires frissonnaient sur la catastrophe: -- Nous en aurons d\'autres! reprit Emma. Et, comme il.', 'C\'était pour vous depuis notre séparation? -- Oh! je l\'aurai! s\'écria-t-il en saisissant ses mains, toutes sortes de chatteries; et elle arrivait à la manière du cheval ne serait pas, après tout,.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2566, 'Hippolyte dans la splendeur.', 'Félicité, qui rougissait elle ajouta d\'un air tout réfléchi. -- Puis-je voir Monsieur?.', 'Vous partez en voyage? demanda-t-il. -- Oui. Qui m\'en empêche? répondit-elle. Puis ils avaient ensemble assisté à la fumée des cigares l\'étourdit. Elle s\'évanouissait; on la vit, un jour,.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2567, 'Charles se décida pour un an.', 'D\'abord il aperçut à l\'horizon ni ce qu\'elle disait. Enfin, ces dames crurent distinguer le mot.', 'Il prenait, avec l\'âge, des allures étranges, et qu\'on aurait, je suis chrétien. -- Qu\'est-ce qu\'un chrétien? -- Oui, dit-elle, et j\'ai bien peur de la médecine n\'est pas la peine, elle va.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2568, 'Ruche médicale, journal.', 'Dans les briques, des ravenelles avaient poussé; et, du bout de son corset. En quittant la veille.', 'Quelquefois, à la place des Arts, le quai aux Meules, encore une fois? Du reste, il n\'en finissait pas. Elle restait là tout le reste du miroton, épluchait son fromage, croquait une pomme, vidait sa.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2569, 'Il suivait le récit d\'un.', 'Le garçon de tempérament plus sentimentale qu\'artiste, cherchant des yeux qui vous entoure. La.', 'Emma se souvint qu\'au château de la table, des bassines sur le trottoir. C\'était lui, il ouvrait sa fenêtre (elle s\'y mettait souvent: la fenêtre, et contemplant d\'un regard attendri, elle.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2570, 'Charles qui t\'aime! Me.', 'Au lieu de t\'enivrer au cabaret, tu ferais mieux de suivre la route plutôt. Derrière la porte et.', 'Cependant la nourrice était la marraine, une romance du temps de la Vierge. Elle s\'informait, comme une comtesse. Pauvre bonhomme, d\'ailleurs, qui sans les colzas de l\'an ou de vendre vingt-deux.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2571, 'Eh bien... Elle s\'arrêta;.', 'Quelquefois, quand l\'occasion se présente. Il mit sa main sur la fortune et effrayé toute sa.', 'Charles. Eh! tu as raison, c\'est dans ce système-là qu\'il avait passé sa matinée à la lingerie. Protégée par l\'archevêché comme appartenant à cette invention du couvre-pied: -- Pourquoi ne l\'avoir.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2572, 'Léon ne poursuivait aucune.', 'Elle entrevit, parmi les jarres brunes pleines de bâtiments épars, pressoirs, charreteries et.', 'Les couteaux jamais n\'étaient affilés, ni les appartements se dégarnirent; mais la chambre, il ouvrit la main; leurs yeux se reportèrent sur Charles: elle remarqua même avec surprise qu\'il n\'avait.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2573, 'Modérez-vous! -- Oui,.', 'Quand elle vint elle-même; et, quand il voulait auparavant savoir à quoi peut servir la prière? --.', 'Alors il la remit à sa place; elle se considérait comme fort désillusionnée, n\'ayant plus conscience de ma poche un tas de feuilles sèches. À partir de ce que Charles, jusqu\'au bout, avalait avec.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2574, 'Cependant..., cependant...,.', 'Mais ils meurent à l\'hôpital, parce qu\'ils sont rares; et dont le drap non décati reluisait plus.', 'Il faut marcher avec son tapis discret, ses ornements folâtres et sa petite fille, qui avait l\'air aussi calme dans la main quatorze napoléons. Le marchand fut stupéfait. Alors, pour le bal masqué..', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2575, 'Ils étaient à l\'hôtel de.', 'Restauration, le Marquis, cherchant à rentrer dans la tête, il lui semblait être reculée dans un.', 'III Le lendemain, au point de fichu, on voyait la rivière qui coulait, et, de temps à autre, se mouchait bruyamment, et Homais retira son bonnet grec bien avant que le maître d\'hôtel, passant entre.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2576, 'Un grand frisson lui.', 'Charles et referma la porte des ongles sales et une dinde. Il avait la maison du pharmacien. Il.', 'Du reste, disait l\'apothicaire, l\'exercice de la tente, pensait si fort à cette démarche; et même, un soir, dans un magasin de parapluies. M. Lheureux, la semaine prochaine... Qu\'il attende... oui,.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2577, 'Poussière d\'or qui se.', 'Félicité lui montra derrière la grille du notaire; le ciel bleu, autour des clochetons à trèfles;.', 'Il se trouvait dans une sorte d\'hypocrisie naïve, il estima que cette curiosité Un grand frisson lui secouait les épaules, et elle dépensa en un tel concours de population, qu\'il y avait là-dessous.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2578, 'Jugement dernier, le.', 'Mais sa fierté se révolta. -- Eh! non, car vous n\'êtes pas sans savoir pourquoi, excités par cette.', 'On se poussait. Elle se mettait à pleurer. Alors il descendit conter le résultat à cinq ou six paons, luxe des basses-cours cauchoises. La bergerie était longue, la grange était haute, à murs lisses.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2579, 'Les pires jours d\'autrefois.', 'Personne à présent ne le payait, on lui heurtait les coudes en l\'air, la taille attachée très bas.', 'Jamais la vie que le tourbillon du monde que l\'on a tant cherché, là, devant lui, étendue sur un parquet fait pour venir?... Ah! ta robe est mouillée! -- Je l\'exècre, votre Dieu! -- L\'esprit de.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2580, 'XI Il avait à écrire deux.', 'L\'apothicaire, à qui le pousserait jusqu\'à elle, vers quel rivage il la rêvait; c\'était toujours.', 'Lorsque l\'envie la prenait trop fort, et Emma sentait une odeur de vanille et de grands coups par terre sur le dos deux boutons de rose naturels, en guise de boules, au sommet. Jusqu\'au soir, on.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2581, 'Alors, pour dissimuler son.', 'Assise dans son propre intérêt, qu\'il le balayait lui-même. Enfin, si la finesse de son fils; et.', 'Comme Tostes, sans doute, ceux qu\'avaient épousés ses anciennes camarades du couvent. Que faisaient-elles maintenant? À la classe se mit à genoux; elle finit par faire la cour. Il était en relation.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2582, 'Elle n\'avait jamais vu de.', 'Justin de la forêt d\'Argueil d\'une part, des vents d\'ouest par la nouvelle maison, et jamais ne.', 'En quittant la veille était pour lui d\'humiliation dans la nuit, au clair de la rue Grand-Pont, traversa la planche aux vaches était levée, il fallait se tenir courbé. Ils étaient brillants, fins du.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2583, 'Madame Bovary prit la clef..', 'Néanmoins, ne reculant pas devant ce qu\'il regardait. Malgré le prix très bas par une décoction de.', 'Souvent une charrette passait près d\'elles. Elles marchaient en se séparant d\'elle. Les murs des jardins, garnis à leur place semblaient devenus plus immobiles et se levait. Dans l\'avenue, un jour.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2584, 'Un voisin la fit haleter de.', 'Charles était là. Il poussait devant le monde dire ceci, ne pas payer, d\'emprunter, de souscrire.', 'Dubuc, la vieille diligence l\'Hirondelle, qui descendait par la rue Ganterie, qui le rehaussait d\'estime vis-à-vis de lui-même. C\'était comme une crinière jusqu\'au pied de l\'alcôve; alors,.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2585, 'L\'effet doit cesser, dit.', 'Berthe, au grand jour, arrivant par les rideaux de levantine rouge, qui descendaient du plafond,.', 'Léon pourtant se décida; il alla frapper à la Société d\'agriculture. Quand il fut résolu que l\'on nomme la Pâture, sur le front, comme un saltimbanque? Ils appellent ces embarras-là, faire le.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2586, 'Lion d\'or qui se.', 'Prenant donc un parti moyen, Léon chercha quelque place de second clerc à Rouen, sur le siège..', 'En effet, les vachers et les mélancolies. Il se mit à lui en trouva une: la veuve était maigre; elle avait pu placer sa vie des yeux désespérés, cherchant au loin la prairie, et même elle y fixait.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2587, 'Beauvoisine, qui est là. Ce.', 'Il y en avait dépensé à toutes les questions indiscrètes, la calomnie, le dédain, l\'outrage.', 'Léon; elle eut peur, et parvint à se nettoyer les cuirs vernis de mon équipement. L\'apothicaire commençait à s\'ennuyer, car elle se mettait à tousser dans son âme s\'enfonçait en cette contemplation,.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2588, 'L\'odeur des fers, avec ces.', 'Et leur charrette qui est destiné pour les oiseaux; la fontaine, au milieu, et le soir sur la.', 'Dupuis eut l\'honneur de lui lire des romans, de mauvais livres, des ouvrages manuels! Si elle te demande de l\'apothicaire, il reprit: -- Le coup, vous comprenez, est encore temps! s\'écria-t-il..', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2589, 'Elle persista pourtant, et,.', 'C\'était la même, celle-là! Il fut obligé d\'entrer dans un geste lent des épaules. Bovary.', 'Une aventure amenait parfois des épingles à cheveux qu\'elle avait coutume de cracher dans les fauteuils, les canapés, les consoles, se répétant dans les fauteuils du salon. Tous les deux, lui placé.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2590, 'Yonville en suivant le bord.', 'Voltaire. Mais tout cela c\'étaient des gestes. Mais Charles, qui s\'affaissa jusqu\'aux genoux dans.', 'Elle s\'épiait curieusement, pour discerner si elle regrettait que son charretier, l\'homme à la mine mélancolique du svelte animal qui bâillait avec lenteur, elle s\'attendrissait, et, le lendemain,.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2591, 'Il tirait la bride les.', 'Aujourd\'hui cependant, vu la quantité, ce n\'est pas naturel qu\'un homme portait derrière eux. Il.', 'Il lisait tout haut, dans son fauteuil, alors son bonheur ne se souvenait de matins comme celui-ci, où, après avoir prié madame Lefrançois paraissait préoccupée. -- Voyez-les donc! disait-elle, on.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2592, 'Comment!... Au secours! à.', 'Elle lui demanda d\'où venait ce papier. -- De quoi, madame? J\'écoute. Elle se mit à profiter..', 'Comices! Par un geste doux plein d\'angoisse, croyant apercevoir dans la chambre. Ses bottes craquaient sur le sable, le jasmin embaumait, le ciel à travers eux, comme par un coq gaulois, appuyé.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2593, 'Il tomba par terre. Mais, à.', 'Dès quatre heures du soir, il fallait couper le tendon rebelle venait enfin de céder sous les.', 'Il était, lui, un conseiller de préfecture; puis il pleurerait abondamment, et enfin, la surprise passée, il pardonnerait. -- Oui, j\'y vais, répliqua l\'apothicaire étonné; ne fais-je point partie de.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2594, 'Marseille, où ils eurent à.', 'Une valse aussitôt commençait, et, sur la borne; et elle resta quelques minutes à les faire tomber.', 'Malgré ses airs évaporés (c\'était le cadeau de sa maladie elle s\'était tue, avalant sa rage dans un placard. Le soir de chaque article, madame Bovary levait les siens vers lui; une torpeur la.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2595, 'Ce mot lui arriva comme une.', 'Il lui fallait une femme. Elle lui représenta les impossibilités de leur habit, causaient avec les.', 'Bovary. Il lut: -- «Malgré les préjugés d\'un autre monde. Mais une jeune fille en robe de chambre; et, les volets étaient fermés, laissait apercevoir dans les églises sous le buste si roide et.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2596, 'Tostes après quatre ans que.', 'Il la baisa sur le sable, vous apportant un nid d\'oiseau. Lorsqu\'elle eut treize ans, son père ou.', 'Depuis deux heures bientôt, s\'était immobilisé dans l\'église en trois rayons énormes, par les sanglots, haletait dans l\'ombre, au bord de l\'eau dans l\'arrosoir pour faire une robe. -- Celle que vous.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2597, 'Elle était à la porte du.', 'M. Tuvache, au préfet! M. Derozerays, de temps à autre par une nuit qu\'il ventait fort, s\'est.', 'Rodolphe, l\'ayant aperçu de loin, semblait une insulte imbécile, et sa casquette à la table des fermes, des bois; tu chasses à courre, tu voyages à Paris... Eh! quand ce ne serait pas déplacée dans.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2598, 'Mais il se contraignait à ne.', 'Maulevrier, baron de la pile. Elle semblait fort occupée quand il s\'était rendormi. M. Bournisien,.', 'C\'était de visiter sa chambre. On n\'y montait pas. Elle décachetait ses lettres, épiait ses démarches, elle épiait son visage; elle inventa toute une histoire qui expliquât les choses à Bovary..', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2599, 'Son état, jusqu\'à présent,.', 'Elles restaient paisibles, allongeant la tête pour deviner ce qu\'il voulait dire; et ils causaient.', 'Et moi qui voudrais vous faire ses fantaisies. Pourtant il fallait tout craindre; en s\'attachant M. Bovary père, qui, méprisant au fond de la journée; car Charles, en entrant, il posait la main.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2600, 'Car ils précisaient de plus.', 'Elle avait, de plus, contre les ânes qui avaient la taille serrée dans un souterrain. Une.', 'D\'ailleurs, la parole qu\'il avait retrouvés dans un bas de la salir. Le notaire reprit d\'un ton paterne, tout en se frappant la cuisse; n\'ayez peur! vous recevrez toujours votre dinde. Mais, quand.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2601, 'On lisait sur l\'un: «Au.', 'Au coup de pied. Le portrait de Rodolphe la gagnèrent. L\'amour l\'avait enivrée d\'abord, et elle.', 'Bovary cherchait un patard au fond d\'un golfe, au bord de l\'eau avec sa bouche se tordaient en parlant), celles, monsieur le curé? demanda la permission de garder son sang-froid, raisonner, se.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2602, 'Nous avons, sous le mètre,.', 'Ceux-ci se fâchèrent, et ils se connaissaient; est-ce qu\'il doutait d\'elle? Quel enfantillage!.', 'Quand vous entriez dans une fissure de la philosophie! Le pauvre diable vagabondant avec son canif une des dames se leva et courut à sa voix et par derrière, en vous penchant sur la table, salua.', '2024-08-01 21:56:49', '2024-08-01 21:56:49', ''),
(2603, 'Example Category', 'This is an example category description that provides details about the category.', 'example-category', '2024-08-03 13:02:20', '2024-08-03 13:02:20', ''),
(2604, 'Example Categories', 'This is an example category description that provides details about the category.', 'example-categories', '0000-00-00 00:00:00', '2024-08-03 16:42:31', '');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `habitat`
--

DROP TABLE IF EXISTS `habitat`;
CREATE TABLE IF NOT EXISTS `habitat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_per_night` double NOT NULL,
  `max_guests` int NOT NULL,
  `amenities` json NOT NULL,
  `availability` json NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `updated_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `IDX_3B37B2E87E3C61F9` (`owner_id`),
  KEY `IDX_3B37B2E812469DE2` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `habitat`
--

INSERT INTO `habitat` (`id`, `owner_id`, `category_id`, `title`, `description`, `slug`, `location`, `price_per_night`, `max_guests`, `amenities`, `availability`, `created_at`, `updated_at`, `city`, `country`, `url`) VALUES
(132, 798, 2566, 'Cour. Loin de s\'ennuyer à étudier. Elle laissa.', 'Emma, prête à sortir, sur la pièce à plafond bas où il était loin de pouvoir se reporter en idée.', 'assumenda-soluta-delectus-minima-dolores-ea-rerum', '4, impasse de Bertin\n20883 Blanchet', 122.68, 5, '[\"dolorem\", \"quos\", \"aut\"]', '[\"1 day\"]', '2024-08-01 21:56:49', '2024-08-01 21:56:49', '', '', NULL),
(133, 801, 2583, 'Tostes. Lui, il était bien riche, et elle!... si.', 'Le clerc ne manquait pas de chagrins. Puis, considérant la mine de plomb, qu\'il avait affaire. --.', 'rerum-ipsum-qui-quis-et', '35, rue Denis Leger\n86256 Simon', 56.29, 4, '[\"dolorem\", \"quos\", \"aut\"]', '[\"1 day\"]', '2024-08-01 21:56:49', '2024-08-01 21:56:49', '', '', NULL),
(134, 803, 2553, 'Et ce fut d\'abord un long jet de salive brune,.', 'Homais en dressant ses sourcils et en haletant un peu. -- Ah! c\'est la fin de sa société! Il se.', 'labore-dolor-error-eaque-officia-id-laudantium', '44, rue Boulanger\n53924 Diaz', 195.83, 9, '[\"dolorem\", \"quos\", \"aut\"]', '[\"1 day\"]', '2024-08-01 21:56:49', '2024-08-01 21:56:49', '', '', NULL),
(135, 802, 2592, 'Souvent elle s\'arrêtait une minute à regarder.', 'Sa maison, du haut de la consoler par quantité de salutations et emplissant beaucoup d\'espace avec.', 'ducimus-unde-recusandae-temporibus-adipisci-doloribus', '935, rue Joseph Rodrigues\n87347 Pottier-sur-Ferrand', 67.91, 10, '[\"dolorem\", \"quos\", \"aut\"]', '[\"1 day\"]', '2024-08-01 21:56:49', '2024-08-01 21:56:49', '', '', NULL),
(136, 798, 2574, 'C\'était la seule qui me paraissait vous.', 'Le soleil brillait sur la cuisse gauche, et il y avait en tête une phrase qui pût la traduire.', 'quas-assumenda-accusamus-quo', '7, place Richard\n66476 GuyotBourg', 107.9, 5, '[\"dolorem\", \"quos\", \"aut\"]', '[\"1 day\"]', '2024-08-01 21:56:49', '2024-08-01 21:56:49', '', '', NULL),
(137, 796, 2602, 'Ah! c\'est peut-être à un les coups fêlés de la.', 'Comme ils aimaient cette bonne chambre pleine de vieilles ferrailles, de tonneaux vides,.', 'dolor-officia-in-eligendi-nam', '51, avenue Thierry\n57 634 Barbe-sur-Dupont', 214.01, 8, '[\"dolorem\", \"quos\", \"aut\"]', '[\"1 day\"]', '2024-08-01 21:56:49', '2024-08-01 21:56:49', '', '', NULL),
(138, 801, 2572, 'Si son enfance se fût diminuée, sans doute! --.', 'Partout fleurissent le commerce et les toques de velours, à châle; toutes les marchandises qu\'elle.', 'non-voluptatem-sapiente-suscipit-eligendi', '66, boulevard Laurence Dumas\n44 241 Boyer', 276, 2, '[\"dolorem\", \"quos\", \"aut\"]', '[\"1 day\"]', '2024-08-01 21:56:49', '2024-08-01 21:56:49', '', '', NULL),
(139, 800, 2559, 'Charles retourna donc vers la muraille..', 'Aussi jugea-t-elle utile de descendre chaque fois à la porte; on ouvrit toute grande la maison,.', 'dolores-architecto-modi-molestias-voluptatem-earum', '6, place Pires\n37286 VoisinVille', 158.78, 4, '[\"dolorem\", \"quos\", \"aut\"]', '[\"1 day\"]', '2024-08-01 21:56:49', '2024-08-01 21:56:49', '', '', NULL),
(140, 800, 2554, 'Une jeune personne blonde se tenait à sa femme,.', 'Berthe, de la terrasse. M. Bournisien, comme autrefois, de ces meubles vides où il y pétillait.', 'cumque-expedita-nihil-qui-ipsum-excepturi-consequatur-facere', '577, place Clémence Guillot\n74262 LegendreVille', 171.2, 7, '[\"dolorem\", \"quos\", \"aut\"]', '[\"1 day\"]', '2024-08-01 21:56:49', '2024-08-01 21:56:49', '', '', NULL),
(141, 803, 2572, 'Et elle s\'avança, elle regarda au loin, qui.', 'Comme les matelots en détresse, elle promenait sur la Pâture, sur le trottoir, frappaient tous.', 'et-libero-non-eos', '10, place Luc Fernandez\n34 831 Laurent', 163.18, 8, '[\"dolorem\", \"quos\", \"aut\"]', '[\"1 day\"]', '2024-08-01 21:56:49', '2024-08-01 21:56:49', '', '', NULL),
(142, 808, 2568, 'Beautiful Mountain Retreat', 'A peaceful retreat located in the mountains, perfect for a relaxing getaway.', 'beautiful-mountain-retreat', 'Mountain View, CA', 180, 4, '[\"WiFi\", \"Fireplace\", \"Hot Tub\", \"Dry Hot\"]', '[{\"endDate\": \"2024-08-15\", \"startDate\": \"2024-08-01\"}, {\"endDate\": \"2024-09-15\", \"startDate\": \"2024-09-01\"}]', '0000-00-00 00:00:00', '2024-08-03 20:50:41', '', '', NULL),
(144, 808, 2568, 'Beautiful Mountain Retreat', 'A peaceful retreat located in the mountains, perfect for a relaxing getaway.', 'beautiful-mountain-retreat', 'Mountain View, CA', 180, 4, '[\"WiFi\", \"Fireplace\", \"Hot Tub\", \"Dry Hot\"]', '[{\"endDate\": \"2024-08-16\", \"startDate\": \"2024-08-01\"}, {\"endDate\": \"2024-09-16\", \"startDate\": \"2024-09-01\"}]', '2024-08-03 21:02:16', '2024-08-03 21:02:16', '', '', NULL),
(145, 807, 2553, 'La tanière boisée', 'Cool', 'la-taniere-boisee', 'Vincennes', 49, 9, '[\"Cuisine équipée, douche équipiée, machine à lavée\"]', '[\"En étude\"]', '2024-09-23 10:57:23', '2024-09-23 10:57:23', 'Montpelier', 'France', NULL),
(146, 807, 2554, 'La tanière boisée', 'J\'avais pas soif', 'la-taniere-boisee', 'Sous la seine', 90, 2, '[\"Cuisine équipée, douche équipiée, machine à lavée\"]', '[\"En étude\"]', '2024-09-23 11:09:41', '2024-09-23 11:09:41', 'Montpelier', 'France', NULL),
(147, 807, 2554, 'Le couché de soleil', 'Magnifique', 'le-couche-de-soleil', 'Sous la seine', 35, 1, '[\"Cuisine équipée, douche équipiée, machine à lavée\"]', '[\"En étude\"]', '2024-09-23 11:28:01', '2024-09-23 11:28:01', 'Montpelier', 'France', NULL),
(148, 807, 2553, 'Tanière boisée', 'Tanière boisée d\'une incroyable beauté, offrant un confort absolu !', 'taniere-boisee', '38 rue des branches, Vincennes', 150, 5, '[\"Cuisine équipée, douche équipiée, machine à lavée, chauffage\"]', '[\"Prochainement\"]', '2024-09-23 12:58:33', '2024-09-23 12:58:33', 'Montpelier', 'France', NULL),
(149, 807, 2553, 'Tanière boisée', 'Tanière boisée d\'une incroyable beauté, offrant un confort absolu !', 'taniere-boisee', '38 rue des branches, Vincennes', 150, 5, '[\"Cuisine équipée, douche équipiée, machine à lavée, chauffage\"]', '[\"Prochainement\"]', '2024-09-23 13:08:09', '2024-09-23 13:08:09', 'Montpelier', 'France', NULL),
(150, 807, 2553, 'Tanière boisée', 'Tanière Boisée d\'une Incroyable beauté, offrant un confort absolu. ', 'taniere-boisee', '38 rue des branches, Vincennes', 200, 5, '[\"Cuisine équipée, douche équipiée, machine à lavée, chauffage\"]', '[\"Prochainement\"]', '2024-09-23 13:39:01', '2024-09-23 13:39:01', 'Montpelier', 'France', NULL),
(151, 807, 2553, 'Tanière boisée', 'Tanière Boisée d\'une beauté incroyable offrant un confort absolu !', 'taniere-boisee', '38 rue des branches, Vincennes', 200, 5, '[\"Cuisine équipée, douche équipiée, machine à lavée, chauffage\"]', '[\"Prochainement\"]', '2024-09-23 16:57:33', '2024-09-23 16:57:33', 'Paris', 'France', NULL),
(152, 807, 2555, 'L\'avion rénové', 'L\'avion rénové avec des équipements de pointe pour une expérience Iot incroyable !', 'l-avion-renove', '5 ravenue le gagnant 67300', 510, 2, '[\"Cuisine équipée, douche équipiée, machine à lavée, chauffage\"]', '[\"Prochainement\"]', '2024-09-23 17:12:00', '2024-09-23 17:12:00', 'Paris', 'France', NULL),
(153, 807, 2556, 'Luffy a trouvé le One Peace', 'Embarquez à bord d\'un magnifique navire au bord de l\'eau. Plongez dans un univers de pirate pour vous procurer une aventure mémorable.', 'luffy-a-trouve-le-one-peace', '10 quai de Marseille', 609, 12, '[\"Cuisine équipée, douche équipiée, machine à lavée, chauffage\"]', '[\"En cours\"]', '2024-09-23 17:14:35', '2024-09-23 17:14:35', 'Marseille', 'France', NULL),
(154, 807, 2557, 'La tente de ma tante', 'Une yourte faite avec amour, artisanat et souci du détail, comme le ferait votre tante bien aimée qui met tout son cœur dans ses réalisations', 'la-tente-de-ma-tante', '20 fonds montesque', 120, 3, '[\"Cuisine équipée, douche équipiée, machine à lavée, chauffage\"]', '[\"immédiate\"]', '2024-09-23 17:17:35', '2024-09-23 17:17:35', 'Bordeaux', 'France', NULL),
(155, 807, 2553, 'La ferme', 'Rendez-vous dans cette ferme incroyablement aménagée, offrant calme, douceur au milieu de la verdure, des plantes et de l\'air pur.', 'la-ferme', '1 rue du furet, strastbourg', 100, 3, '[\"Cuisine équipée, douche équipiée, machine à lavée, chauffage\"]', '[\"immédiate\"]', '2024-09-23 17:20:05', '2024-09-23 17:20:05', 'Montpelier', 'France', NULL),
(156, 807, 2553, 'La villa de la montagne', 'Une maison familiale située à 70 mètres de hauteur en montagne, accessible en voiture ou à pied pour les plus aventuriers. Elle offre une vue panoramique sur toute la ville, ainsi que sur les majestueuses montagnes environnantes.', 'la-villa-de-la-montagne', 'Au sommet de la montagne', 1000, 15, '[\"Cuisine équipée, douche équipiée, machine à lavée, chauffage\"]', '[\"immédiate\"]', '2024-09-23 17:21:52', '2024-09-23 17:21:52', 'Paris', 'France', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `image`
--

DROP TABLE IF EXISTS `image`;
CREATE TABLE IF NOT EXISTS `image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `habitat_id` int DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `updated_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`),
  KEY `IDX_C53D045FAFFE2D26` (`habitat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `image`
--

INSERT INTO `image` (`id`, `habitat_id`, `url`, `description`, `created_at`, `updated_at`) VALUES
(21, NULL, 'http://lorempixel.com/640/480/business/Faker/?89847', 'Veritatis optio impedit atque minima iste consequatur ut id.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(22, NULL, 'http://lorempixel.com/640/480/business/Faker/?97561', 'Totam ut soluta corrupti.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(23, NULL, 'http://lorempixel.com/640/480/business/Faker/?52180', 'Corporis quaerat commodi qui ratione reprehenderit est est in.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(24, NULL, 'http://lorempixel.com/640/480/business/Faker/?27233', 'Voluptatem rerum occaecati et deleniti quia qui nostrum dicta.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(25, NULL, 'http://lorempixel.com/640/480/business/Faker/?80918', 'Rerum deserunt qui aliquid sequi.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(26, NULL, 'http://lorempixel.com/640/480/business/Faker/?31276', 'Quaerat hic ipsa doloribus totam natus.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(27, NULL, 'http://lorempixel.com/640/480/business/Faker/?83310', 'Odio vitae quia veritatis ex expedita esse molestiae.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(28, NULL, 'http://lorempixel.com/640/480/business/Faker/?14230', 'Hic aut molestiae voluptatum sunt dolorem.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(29, NULL, 'http://lorempixel.com/640/480/business/Faker/?51343', 'Unde esse in non veritatis.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(30, NULL, 'http://lorempixel.com/640/480/business/Faker/?92207', 'Tempore iste facilis laboriosam quos vero dolorem nam est.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(31, 144, 'https://example.com/images.jpg', 'Image description here', '0000-00-00 00:00:00', '2024-08-04 21:02:50'),
(32, 145, '/uploads/images/66f14994bc2ea.png', NULL, '2024-09-23 10:57:24', '2024-09-23 10:57:24'),
(33, 145, '/uploads/images/66f14994bf49c.png', NULL, '2024-09-23 10:57:24', '2024-09-23 10:57:24'),
(34, 145, '/uploads/images/66f14994bfb87.png', NULL, '2024-09-23 10:57:24', '2024-09-23 10:57:24'),
(35, 146, '/uploads/images/66f14c75a26dd.png', NULL, '2024-09-23 11:09:41', '2024-09-23 11:09:41'),
(36, 147, '/uploads/images/66f150c1cf4fa.png', NULL, '2024-09-23 11:28:01', '2024-09-23 11:28:01'),
(37, 148, 'https://localhost:8000/uploads/images/66f165f9350f8.png', NULL, '2024-09-23 12:58:33', '2024-09-23 12:58:33'),
(38, 149, 'https://localhost:8000/uploads/images/66f16839242c9.png', NULL, '2024-09-23 13:08:09', '2024-09-23 13:08:09'),
(39, 150, 'https://localhost:8000/uploads/images/66f16f75c7253.png', NULL, '2024-09-23 13:39:01', '2024-09-23 13:39:01'),
(40, 151, 'https://localhost:8000/uploads/images/66f19dfd1750f.png', NULL, '2024-09-23 16:57:33', '2024-09-23 16:57:33'),
(41, 152, 'https://localhost:8000/uploads/images/66f1a160e1081.png', NULL, '2024-09-23 17:12:00', '2024-09-23 17:12:00'),
(42, 153, 'https://localhost:8000/uploads/images/66f1a1fb4d296.png', NULL, '2024-09-23 17:14:35', '2024-09-23 17:14:35'),
(43, 154, 'https://localhost:8000/uploads/images/66f1a2afc3d5b.png', NULL, '2024-09-23 17:17:35', '2024-09-23 17:17:35'),
(44, 155, 'https://localhost:8000/uploads/images/66f1a34562695.png', NULL, '2024-09-23 17:20:05', '2024-09-23 17:20:05'),
(45, 156, 'https://localhost:8000/uploads/images/66f1a3b106fdf.png', NULL, '2024-09-23 17:21:53', '2024-09-23 17:21:53');

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender_id` int DEFAULT NULL,
  `receiver_id` int DEFAULT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `updated_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`),
  KEY `IDX_B6BD307FF624B39D` (`sender_id`),
  KEY `IDX_B6BD307FCD53EDB6` (`receiver_id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `message`
--

INSERT INTO `message` (`id`, `sender_id`, `receiver_id`, `content`, `created_at`, `updated_at`) VALUES
(61, 803, 804, 'Dolor quaerat voluptatem libero autem enim ex a. Consequatur omnis ducimus assumenda perferendis. Aliquid quia sit dolorum consequatur quia.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(62, 803, 801, 'Ad sed sed omnis numquam aut. Quibusdam dolores non non et ex debitis. Cum in fugiat neque non.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(63, 801, 800, 'Voluptatem temporibus sunt accusantium dolor. Voluptatem voluptate perferendis in autem nostrum saepe. Quo sunt minima necessitatibus necessitatibus fuga ut est.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(64, 798, 800, 'Dignissimos facilis sit itaque deleniti iste aliquam est eveniet. Omnis in nihil hic. Ullam fugiat aut temporibus voluptatem voluptate vitae. Maxime odit quis quam aperiam sed.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(65, 801, 796, 'Totam et est aut modi. Explicabo dicta facilis necessitatibus animi architecto. Qui ut ut fuga veritatis. Ab aspernatur at quo.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(66, 800, 795, 'Voluptatem et modi voluptatem dolores culpa est. Rerum enim ut corporis laboriosam odit voluptas aliquid. Autem saepe odit dolores.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(67, 802, 804, 'Quam quas facilis dolorem. Voluptatum atque vitae quia quis. Omnis quis corrupti molestiae nihil aut et ipsa illum. Impedit sit aut quia id quis doloremque qui. Hic aut exercitationem optio rerum.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(68, 802, 798, 'Enim nisi optio excepturi molestias laborum rerum. Eum doloribus sit ut quam et quis earum. Ut est aliquid quasi qui est non. Sunt omnis et impedit odit molestias est voluptas.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(69, 795, 804, 'Soluta modi nam rem dicta necessitatibus voluptatum aut. Et voluptas sed illum qui voluptates. Vel delectus eos natus cum minima ducimus nulla tenetur. Id deserunt molestiae soluta.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(70, 801, 803, 'Doloribus fugit quaerat dolores dolor sit accusamus. Sed enim id itaque consequatur quis. Aut iste ullam id beatae voluptatibus. Hic omnis aut sequi sed iure incidunt et.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(71, 804, 802, 'Dolorem fugiat voluptatem vel dolor cupiditate. Voluptas necessitatibus reprehenderit voluptas eligendi libero. Eius laboriosam optio fuga ut. Aut modi eaque sunt placeat cum.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(72, 798, 796, 'Et rem non delectus est expedita molestias suscipit. Eum explicabo quis qui fugit voluptatum earum. Non animi delectus ut. Possimus omnis maiores quisquam et sapiente aut. Quo est iure quis.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(73, 800, 801, 'Itaque ducimus voluptates modi veritatis quis quia. Ea tenetur facilis impedit fugit officia nemo rem. Sit repudiandae nemo fuga quia excepturi earum praesentium.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(74, 800, 802, 'Harum mollitia culpa ut eaque distinctio accusantium. Quo aut necessitatibus blanditiis ex. Minus adipisci suscipit totam reprehenderit quas suscipit occaecati.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(75, 801, 798, 'Minima quia architecto totam unde dolores provident facilis. Fuga fuga modi repudiandae aspernatur culpa cum animi in.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(76, 796, 799, 'Sint quis est rerum eveniet dolorem. Tenetur iure inventore dolore sit illum quia enim dolor.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(77, 800, 795, 'Adipisci fugit ea nulla perspiciatis quo. Eligendi in tempore magnam quaerat quis quasi cum. Sed libero ut sed hic. Non vel neque quis alias placeat.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(78, 795, 802, 'Aut quidem consequuntur tempore qui architecto ex. Distinctio eum voluptas est qui.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(79, 804, 796, 'Quo cumque aut occaecati rem soluta voluptas. Fugit quia quidem necessitatibus dignissimos. Quas non quis dolor veniam. Commodi est quasi voluptatem id.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(80, 798, 799, 'Unde et placeat sunt reiciendis. Omnis earum numquam laudantium delectus ut rerum. Sit eum vel quidem sed. Tempore distinctio voluptatum qui sint.', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(81, NULL, 808, 'Bonjour, ceci est un message test. Bravo', '0000-00-00 00:00:00', '2024-08-04 20:28:59');

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

DROP TABLE IF EXISTS `notification`;
CREATE TABLE IF NOT EXISTS `notification` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_read` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`),
  KEY `IDX_BF5476CAA76ED395` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `notification`
--

INSERT INTO `notification` (`id`, `user_id`, `message`, `is_read`, `created_at`) VALUES
(21, 796, 'Quaerat sint voluptatum tenetur amet et.', 1, '2024-08-01 21:56:49'),
(22, 798, 'Quam harum et autem vero ut eos.', 0, '2024-08-01 21:56:49'),
(23, 803, 'Laboriosam odio cumque quia est.', 0, '2024-08-01 21:56:49'),
(24, 798, 'Earum minima exercitationem mollitia voluptatibus.', 1, '2024-08-01 21:56:49'),
(25, 804, 'Nihil magnam magnam laudantium eaque nulla non.', 0, '2024-08-01 21:56:49'),
(26, 803, 'Esse id quisquam iure quas sunt aut dolorum tempora.', 1, '2024-08-01 21:56:49'),
(27, 803, 'Doloremque ducimus rerum dolorum dolorem.', 1, '2024-08-01 21:56:49'),
(28, 802, 'Id impedit consequatur nobis corrupti consequatur rerum.', 0, '2024-08-01 21:56:49'),
(29, 803, 'Sed doloremque debitis minus.', 1, '2024-08-01 21:56:49'),
(30, 798, 'Omnis a ut vero maiores voluptates.', 0, '2024-08-01 21:56:49'),
(31, 799, 'Et non praesentium quaerat nisi reiciendis mollitia numquam.', 0, '2024-08-01 21:56:49'),
(32, 797, 'Nihil dicta architecto tempore ut natus perferendis quidem.', 0, '2024-08-01 21:56:49'),
(33, 796, 'Animi dolores magni tempore.', 1, '2024-08-01 21:56:49'),
(34, 796, 'Quam explicabo nihil cum incidunt.', 1, '2024-08-01 21:56:49'),
(35, 798, 'Esse facilis architecto vel recusandae quae.', 0, '2024-08-01 21:56:49'),
(36, 797, 'Fugiat quidem tempore eos dolor autem.', 0, '2024-08-01 21:56:49'),
(37, 803, 'Amet sunt dignissimos quos deserunt.', 1, '2024-08-01 21:56:49'),
(38, 802, 'Quae cupiditate occaecati reprehenderit porro velit repellendus.', 0, '2024-08-01 21:56:49'),
(39, 798, 'Esse sunt laudantium modi modi autem.', 0, '2024-08-01 21:56:49'),
(40, 799, 'Neque nostrum optio illum et.', 0, '2024-08-01 21:56:49'),
(41, 808, 'You have a new message from the admin.', 0, '2024-08-04 21:42:38');

-- --------------------------------------------------------

--
-- Structure de la table `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE IF NOT EXISTS `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reservation_id` int DEFAULT NULL,
  `amount` double NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `updated_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `valide_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_6D28840DB83297E7` (`reservation_id`),
  KEY `IDX_6D28840DE356BC49` (`valide_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `payment`
--

INSERT INTO `payment` (`id`, `reservation_id`, `amount`, `status`, `created_at`, `updated_at`, `valide_id`) VALUES
(1, 282, 944.88, 'failed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(2, 284, 166.47, 'completed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(3, 276, 106.98, 'pending', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(4, 291, 419.22, 'completed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(5, 289, 550.45, 'pending', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(6, 294, 788.66, 'failed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(7, 286, 351.54, 'completed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(8, 289, 838.42, 'failed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(9, 293, 761.85, 'pending', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(10, 271, 852.64, 'failed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(11, 296, 956.37, 'pending', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(12, 291, 897.48, 'pending', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(13, 283, 820.93, 'failed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(14, 280, 699.91, 'completed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(15, 272, 778.18, 'completed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(16, 280, 551.49, 'completed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(17, 297, 929.57, 'failed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(18, 291, 355.34, 'pending', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(19, 282, 782.12, 'completed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(20, 287, 947.62, 'failed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(21, 295, 232.89, 'completed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(22, 290, 682.69, 'pending', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(23, 297, 215.31, 'pending', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(24, 288, 162.46, 'failed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(25, 272, 970.19, 'completed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(26, 298, 725.29, 'pending', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(27, 289, 424.27, 'pending', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(28, 272, 671.92, 'pending', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(29, 299, 84.96, 'failed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(30, 281, 755.6, 'failed', '2024-08-01 21:56:49', '2024-08-01 21:56:49', NULL),
(31, 301, 200.5, 'Pending', '2024-08-04 22:25:49', '2024-08-04 22:25:49', 105),
(32, 301, 613.4, 'Pending', '2024-08-04 22:31:37', '2024-08-04 22:31:37', 105);

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
CREATE TABLE IF NOT EXISTS `promotion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `habitat_id` int DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_percentage` double NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `updated_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`),
  KEY `IDX_C11D7DD1AFFE2D26` (`habitat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `promotion`
--

INSERT INTO `promotion` (`id`, `habitat_id`, `title`, `description`, `slug`, `discount_percentage`, `start_date`, `end_date`, `created_at`, `updated_at`) VALUES
(101, 132, 'Le droit d\'innover plus simplement', 'At placeat sed placeat rerum est dolorem ut. Et a voluptatem reprehenderit sit tempora voluptate. Numquam officia qui placeat eos. Blanditiis in quasi modi nesciunt natus.', 'velit-sit-voluptas-repudiandae-ab-eveniet-cumque', 28.23, '2024-08-27 17:03:53', '2025-01-06 04:42:49', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(102, 140, 'Le confort de concrétiser vos projets autrement', 'Quia et illo commodi sed ullam. Dolor eos accusantium at nemo nam. Laboriosam unde autem laudantium tempora illum quibusdam. Ad quaerat reiciendis sunt vitae dolorem id.', 'asperiores-sed-odio-est-nam-vel-quasi-similique', 24.74, '2024-08-28 08:22:35', '2025-01-16 17:19:40', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(103, 133, 'Le plaisir d\'évoluer naturellement', 'In sed ea officia facilis nostrum consequatur distinctio quasi. Alias mollitia rerum tempore sit sunt. Aut eos nam sequi voluptatum. Possimus officia voluptatem dolor.', 'aut-libero-odio-excepturi-repellendus', 40.57, '2024-07-02 10:16:02', '2024-11-17 09:44:01', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(104, 139, 'Le pouvoir de concrétiser vos projets avant-tout', 'Et dolore voluptatem quibusdam magni fugit laudantium provident non. Eos repellendus fuga cupiditate possimus mollitia ratione sapiente. Numquam qui quis pariatur voluptatum.', 'ullam-voluptatem-sunt-voluptatem-voluptatem-quo-perspiciatis-omnis-quam', 29.06, '2024-08-09 11:14:36', '2024-11-04 09:43:24', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(105, 132, 'Le plaisir de changer de manière sûre', 'Eligendi delectus voluptatem eligendi tenetur molestiae dolor maxime. Minima eos cupiditate eum.', 'ut-praesentium-nihil-repellendus-minima-officia-consequuntur', 16.52, '2024-08-31 06:28:53', '2024-11-18 14:01:32', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(106, 133, 'L\'art d\'atteindre vos buts à sa source', 'Repellat nihil voluptatem omnis voluptate. Nesciunt qui iusto atque nostrum. Quibusdam dolor dolores deleniti id eius aut nihil.', 'repellendus-et-distinctio-velit-veniam-qui', 15.05, '2024-07-22 23:49:29', '2024-11-26 18:53:33', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(107, 140, 'L\'art de rouler de manière efficace', 'Earum autem minima consectetur nulla. Sed numquam et velit facere. Illum aliquid temporibus consequuntur quis vel. Quae voluptas nobis sit.', 'sit-doloremque-sunt-adipisci-sit-id-occaecati-sunt', 33.94, '2024-07-09 03:59:02', '2024-09-07 08:31:22', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(108, 137, 'L\'avantage de louer plus simplement', 'Earum eum ad ducimus id iure. Laborum eos aut et nulla libero quisquam repudiandae. Reiciendis voluptatem et velit a. Aut dolor odit repellendus itaque.', 'assumenda-dolor-corporis-vitae', 33.23, '2024-08-08 02:50:45', '2024-12-18 09:55:21', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(109, 137, 'La liberté de louer plus simplement', 'Earum dolores necessitatibus cumque suscipit laudantium possimus ut. Porro quo neque quae sequi et error voluptatem. Voluptas autem hic et odit. Sapiente debitis facere culpa aliquam.', 'quae-culpa-exercitationem-exercitationem-veritatis', 38.94, '2024-07-08 23:35:37', '2024-10-10 14:28:31', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(110, 139, 'Le plaisir de louer de manière sûre', 'Beatae commodi culpa dolor qui ipsum qui voluptatem. Quos est officiis soluta velit aspernatur unde beatae maxime. Qui dolore voluptatibus odit nostrum laudantium.', 'enim-ducimus-facere-sunt-eos-dolore', 42.88, '2024-08-01 15:12:42', '2025-01-18 14:37:01', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(111, 134, 'La sécurité d\'innover plus rapidement', 'Unde facilis repellat qui. Similique tempore enim sequi tempora consequatur dolores. Ut est alias at adipisci non.', 'et-voluptatem-qui-officiis-laboriosam-officia-fuga-rem-cumque', 24.52, '2024-07-13 06:19:57', '2024-09-07 10:54:03', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(112, 136, 'La possibilité d\'innover de manière efficace', 'Unde omnis eum distinctio non quo. Est ut sint recusandae fugiat earum laboriosam. Repudiandae rerum rerum minus autem porro. Doloremque magni cupiditate vel cupiditate explicabo accusamus.', 'quis-et-sit-voluptas-vitae', 30.2, '2024-08-27 17:03:47', '2024-11-04 05:03:38', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(113, 132, 'Le pouvoir de louer naturellement', 'Aspernatur iste corrupti soluta. Et labore sed accusantium officia ut. Est dolor maxime nihil consequatur qui accusantium quos.', 'et-ullam-error-sunt', 37.48, '2024-07-21 18:41:56', '2024-12-31 13:31:39', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(114, 138, 'L\'avantage de changer à sa source', 'Quos non optio vel ea consectetur eveniet iusto nisi. Autem et atque sit velit. Et sint architecto accusamus adipisci molestias.', 'ut-pariatur-explicabo-explicabo', 12.58, '2024-07-31 10:02:25', '2025-01-25 00:25:56', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(115, 141, 'L\'art de rouler à sa source', 'Qui autem veritatis eligendi culpa et repellat. Minima placeat iste dolor nesciunt voluptas. Et in iure quam quaerat qui. Et in et tempore aut reprehenderit accusantium vel quia.', 'quis-praesentium-est-saepe-et-animi', 21.19, '2024-07-03 05:38:13', '2024-12-02 08:58:12', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(116, 136, 'L\'art de rouler plus facilement', 'Sed quia nulla hic occaecati et saepe. Molestias at necessitatibus doloribus itaque expedita repellat iusto. Quidem voluptatem sit incidunt adipisci est.', 'nemo-et-a-laudantium-iste-ipsa', 6.22, '2024-07-27 05:58:20', '2024-11-11 22:16:29', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(117, 136, 'La possibilité d\'avancer à la pointe', 'Quia voluptatem fugiat voluptatem necessitatibus natus. Molestiae illum praesentium architecto voluptas quas labore maxime. Commodi autem dolorum natus sit. Quaerat doloribus consequatur cupiditate consequuntur sit.', 'inventore-perspiciatis-perferendis-eos-aspernatur-omnis', 47.11, '2024-08-16 15:29:07', '2024-12-01 19:26:46', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(118, 137, 'L\'assurance de changer de manière sûre', 'Atque dolores vitae sint est deserunt. Repellat ratione omnis aut aut expedita repellendus beatae officiis.', 'ducimus-explicabo-excepturi-quia-quisquam-nemo-nemo-sint', 16.33, '2024-08-28 03:34:32', '2024-10-01 20:04:28', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(119, 137, 'Le plaisir d\'avancer sans soucis', 'Minima similique et reiciendis nesciunt cumque alias. Aperiam natus nam aperiam. Commodi corrupti quis alias et pariatur. Nihil aspernatur autem molestiae perspiciatis odit non. Numquam hic nulla nulla.', 'dolorem-occaecati-nihil-doloribus-ut', 40.95, '2024-08-09 06:19:42', '2025-01-18 15:49:42', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(120, 138, 'L\'art d\'avancer en toute tranquilité', 'Quis veniam quod ut deserunt ab modi ipsum. Explicabo quo quia sapiente omnis. Qui est esse ipsum omnis.', 'enim-dolore-non-repellendus-a-voluptatum-dolores-explicabo-eos', 27.38, '2024-08-17 06:18:47', '2024-10-19 07:06:40', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(121, 132, 'Summer Sale', 'Enjoy a special summer discount on all bookings!', 'summer-sale', 20.25, '2024-08-01 00:00:00', '2024-08-31 23:59:59', '0000-00-00 00:00:00', '2024-08-04 19:45:35');

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `habitat_id` int DEFAULT NULL,
  `status_id` int DEFAULT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `total_price` double NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `updated_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`),
  KEY `IDX_42C84955A76ED395` (`user_id`),
  KEY `IDX_42C84955AFFE2D26` (`habitat_id`),
  KEY `IDX_42C849556BF700BD` (`status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=304 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`id`, `user_id`, `habitat_id`, `status_id`, `start_date`, `end_date`, `total_price`, `created_at`, `updated_at`) VALUES
(271, 803, 137, 106, '2024-08-07 10:40:53', '2024-08-10 10:40:53', 991.15, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(272, 804, 133, 108, '2024-07-17 19:51:37', '2024-07-21 19:51:37', 298.05, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(273, 798, 136, 108, '2024-08-31 21:12:16', '2024-09-03 21:12:16', 1571.29, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(274, 801, 133, 109, '2024-07-27 04:24:49', '2024-08-06 04:24:49', 1407.03, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(275, 804, 138, 112, '2024-07-23 10:26:24', '2024-07-30 10:26:24', 473.32, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(276, 800, 141, 107, '2024-08-25 20:12:02', '2024-09-07 20:12:02', 946.03, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(277, 800, 132, 105, '2024-08-29 02:07:53', '2024-09-11 02:07:53', 1728.32, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(278, 804, 135, 112, '2024-08-18 09:27:19', '2024-08-28 09:27:19', 1981.12, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(279, 798, 138, 113, '2024-07-14 05:12:51', '2024-07-17 05:12:51', 932.77, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(280, 803, 132, 111, '2024-07-03 17:38:53', '2024-07-07 17:38:53', 439.54, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(281, 795, 132, 106, '2024-08-13 15:13:17', '2024-08-16 15:13:17', 904.11, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(282, 795, 137, 109, '2024-08-03 17:10:10', '2024-08-17 17:10:10', 1451, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(283, 804, 141, 107, '2024-07-07 03:35:04', '2024-07-13 03:35:04', 1569.65, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(284, 797, 139, 109, '2024-08-14 04:47:21', '2024-08-27 04:47:21', 721.74, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(285, 804, 134, 109, '2024-07-14 07:16:24', '2024-07-21 07:16:24', 1170.76, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(286, 804, 134, 112, '2024-08-01 21:25:57', '2024-08-05 21:25:57', 695.38, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(287, 798, 134, 113, '2024-08-11 21:08:35', '2024-08-21 21:08:35', 753.46, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(288, 797, 138, 111, '2024-07-23 05:25:26', '2024-08-05 05:25:26', 1460.65, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(289, 804, 137, 112, '2024-08-09 01:06:33', '2024-08-20 01:06:33', 145.35, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(290, 796, 135, 112, '2024-07-20 22:03:41', '2024-07-22 22:03:41', 204.08, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(291, 803, 137, 110, '2024-07-18 14:47:51', '2024-07-27 14:47:51', 664.54, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(292, 798, 132, 111, '2024-08-15 02:03:29', '2024-08-24 02:03:29', 100.93, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(293, 799, 132, 112, '2024-07-19 05:09:58', '2024-07-23 05:09:58', 1424.68, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(294, 797, 132, 108, '2024-07-30 02:29:52', '2024-08-13 02:29:52', 603.73, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(295, 799, 132, 110, '2024-08-01 10:15:29', '2024-08-02 10:15:29', 481.5, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(296, 801, 139, 111, '2024-08-02 01:01:14', '2024-08-03 01:01:14', 1641.83, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(297, 804, 141, 111, '2024-07-11 05:33:19', '2024-07-23 05:33:19', 504.36, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(298, 796, 135, 109, '2024-07-03 00:31:06', '2024-07-09 00:31:06', 1567.84, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(299, 796, 136, 109, '2024-07-31 18:01:31', '2024-08-11 18:01:31', 1751.6, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(300, 800, 138, 110, '2024-07-19 00:01:36', '2024-07-27 00:01:36', 803.79, '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(301, 805, 132, 105, '2024-08-10 14:00:00', '2024-08-16 11:00:00', 613.4, '0000-00-00 00:00:00', '2024-08-03 23:18:49'),
(302, 805, 144, 105, '2024-08-10 14:00:00', '2024-08-15 11:00:00', 720, '2024-08-08 18:57:58', '2024-08-08 18:57:58'),
(303, 805, 144, 105, '2024-08-10 14:00:00', '2024-08-15 11:00:00', 720, '2024-08-08 19:00:11', '2024-08-08 19:00:11');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `updated_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=371 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `role_name`, `created_at`, `updated_at`) VALUES
(361, 'ROLE_USER', '2024-08-01 21:56:44', '2024-08-01 21:56:44'),
(362, 'ROLE_ADMIN', '2024-08-01 21:56:44', '2024-08-01 21:56:44'),
(363, 'ROLE_MANAGER', '2024-08-01 21:56:44', '2024-08-01 21:56:44'),
(364, 'ROLE_EDITOR', '2024-08-01 21:56:44', '2024-08-01 21:56:44'),
(365, 'perspiciatis', '2024-08-01 21:56:44', '2024-08-01 21:56:44'),
(366, 'est', '2024-08-01 21:56:44', '2024-08-01 21:56:44'),
(367, 'non', '2024-08-01 21:56:44', '2024-08-01 21:56:44'),
(368, 'autem', '2024-08-01 21:56:44', '2024-08-01 21:56:44'),
(369, 'at', '2024-08-01 21:56:44', '2024-08-01 21:56:44'),
(370, 'ROLE_READER', '0000-00-00 00:00:00', '2024-08-04 21:49:44');

-- --------------------------------------------------------

--
-- Structure de la table `status`
--

DROP TABLE IF EXISTS `status`;
CREATE TABLE IF NOT EXISTS `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `updated_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `status`
--

INSERT INTO `status` (`id`, `title`, `description`, `slug`, `created_at`, `updated_at`) VALUES
(105, 'Pending', 'Nobis molestiae omnis ea optio sit aliquam.', 'itaque-delectus-minima-aspernatur-est-molestias-commodi-fuga', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(106, 'Confirmed', 'Sequi id possimus nihil saepe aliquam quis.', 'blanditiis-esse-ea-eos-unde-vel-expedita', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(107, 'Cancelled', 'Ea et libero et.', 'voluptate-quae-id-et-repellat-delectus', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(108, 'Completed', 'Dolorum occaecati amet veritatis ad voluptatem error.', 'minus-hic-neque-nam-ea-tempore-expedita', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(109, 'et', 'Voluptate doloribus vitae quas minima modi sint aut necessitatibus. Quisquam sit et ducimus unde. Deleniti quia dolorum nemo deleniti quos. Aliquam dolorum quibusdam voluptatibus dicta.', 'nostrum-temporibus-dolores-recusandae-perspiciatis-sit', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(110, 'exercitationem', 'Enim suscipit consequatur est odio tempore voluptatum porro. Sed illum beatae facilis. Debitis sed et et molestiae quia sit veritatis quae.', 'corrupti-omnis-voluptatum-eos-cum-fuga', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(111, 'dolor', 'Molestiae aut et sed amet nam. Sit minus sapiente harum. Cumque eveniet consequatur fuga commodi sit non consequuntur. Ipsam veritatis possimus nisi ex.', 'aliquid-sapiente-accusamus-voluptas-recusandae-in-reiciendis-velit', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(112, 'facilis', 'Aut iure ea qui dolore. Similique deleniti id tempore quia culpa voluptates rerum. Aut fugiat aspernatur consequuntur neque voluptatem.', 'nam-eligendi-sed-et-quibusdam-incidunt', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(113, 'totam', 'Aut amet enim provident ut deleniti adipisci voluptatem. Sit quas eveniet enim commodi minima magni. Ex voluptatem sint quibusdam provident consequuntur voluptatem. Sit quasi voluptatem eum impedit.', 'perferendis-tempore-natus-impedit', '2024-08-01 21:56:49', '2024-08-01 21:56:49'),
(114, 'Nouveau Statut', 'Description détaillée du statut', 'Nouveau-Statut', '2024-08-03 21:45:08', '2024-08-03 21:45:08'),
(115, 'Nouveaux Statuts', 'Description détaillée du statut', 'Nouveaux-Statuts', '2024-08-03 21:45:29', '2024-08-03 21:45:29'),
(117, 'Nouveau Statut', 'Description détaillée du statut', 'Nouveau-Statut', '2024-08-03 21:49:58', '2024-08-03 21:49:58'),
(118, 'Nouveau Statut', 'Description détaillée du statut', 'Nouveau-Statut', '0000-00-00 00:00:00', '2024-08-03 21:51:15'),
(119, 'Nouveau Statut', 'Description détaillée du statut', 'Nouveau-Statut', '2024-08-03 22:00:21', '2024-08-03 22:00:21');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `updated_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=817 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `is_active`, `first_name`, `last_name`, `phone_number`, `created_at`, `updated_at`) VALUES
(795, 'skiles.augustus@example.net', '[\"ROLE_USER\"]', '$2y$13$1TOdHtgjX4nEDuLBkqs2TuAJJIBiodrMjJjBvXhHpO4vtuUUF6h5y', 0, 'KyleeAuguste', 'Grimes', '678.779.2383', '2024-08-01 21:56:44', '2024-09-14 18:34:30'),
(796, 'schaefer.cleta@example.net', '[\"ROLE_USER\"]', '$2y$13$NE2EuKsIhjEALqKFmcXl1egDjnTnIkSumyE7uheUxPsLIwkoOpRNG', 1, 'Constance', 'Paucek', '1-880-241-3172x73298', '2024-08-01 21:56:44', '2024-08-01 21:56:45'),
(797, 'anais.oconner@example.com', '[\"ROLE_USER\"]', '$2y$13$CXiD3XoGCPUuOzifnelcRexSEEEuoq/.fFlQiBcSDaK.PKEYjPSVW', 1, 'Ryan', 'Hettinger', '(709)516-4146x3641', '2024-08-01 21:56:45', '2024-08-01 21:56:45'),
(798, 'ubecker@example.com', '[\"ROLE_USER\"]', '$2y$13$HsUqAje4XT.zu6NGnrEgB.O5L7eJe6L0eJMIO0RMetoCu.ud4sgVe', 1, 'Rickie', 'Brakus', '(550)362-7338x547', '2024-08-01 21:56:45', '2024-08-01 21:56:46'),
(799, 'nfriesen@example.org', '[\"ROLE_USER\"]', '$2y$13$t7iWE2Isq/o3FOXvWcG2p.Oqt4a1j5yTRmr.U.xvZNvGE6PCXOF6S', 1, 'Kenton', 'Rowe', '1-022-270-1531x1245', '2024-08-01 21:56:46', '2024-08-01 21:56:46'),
(800, 'schimmel.yasmin@example.net', '[\"ROLE_USER\"]', '$2y$13$4H79OBv6VR.qThi73Ys7SejYqaejsStARi/Mgrj9ACecSkzOrmdGW', 0, 'Landen', 'Raynor', '660.002.8209', '2024-08-01 21:56:46', '2024-08-01 21:56:47'),
(801, 'nitzsche.avis@example.net', '[\"ROLE_USER\"]', '$2y$13$eINOMrvuW6BdRXmwMJ7siubAzFWNEYnku0lsCmxZIOvq5wfW/euSS', 1, 'Noemi', 'Halvorson', '876.871.4441', '2024-08-01 21:56:47', '2024-08-01 21:56:47'),
(802, 'mccullough.scottie@example.com', '[\"ROLE_USER\"]', '$2y$13$BuVtJNUpes8.EoihAMJ6uu66kju7CGdNXXMLChbvOqSj8xFDM7n6S', 0, 'Emmitt', 'Purdy', '(657)123-3447x39886', '2024-08-01 21:56:47', '2024-08-01 21:56:48'),
(803, 'katharina.cartwright@example.net', '[\"ROLE_USER\"]', '$2y$13$eHs/2L.GFyX/DBwYq1yb1u.3eJGzZYo/HNG4XXYjhusdkEjWN0SuO', 0, 'Justina', 'Fisher', '(633)421-6108x4896', '2024-08-01 21:56:48', '2024-08-01 21:56:48'),
(804, 'ryan.kennith@example.org', '[\"ROLE_USER\"]', '$2y$13$NC0/yDKUVX4bajNTsF1eH.X/dY/z5UUMrK8NRpkk6uUKEKPqfRJ46', 1, 'Viva', 'Bashirian', '058.945.4840x50736', '2024-08-01 21:56:48', '2024-08-01 21:56:49'),
(805, 'exemplevvv@domaine.com', '[\"ROLE_USER\"]', '$2y$13$kzEiPyQbKADZ6LsjZND/5.p6Dm3XtmpgDg/iSWlz.g/JSY4WIyi9m', 1, 'Prénom', 'NomDeFamille', '+1234567890', '2024-08-01 23:11:55', '2024-08-01 23:11:55'),
(807, 'admin@admin.com', '[\"ROLE_ADMIN\", \"ROLE_USER\"]', '$2y$13$kzEiPyQbKADZ6LsjZND/5.p6Dm3XtmpgDg/iSWlz.g/JSY4WIyi9m', 1, 'Adminffffffff', 'Admininistrateur', '+1234567890', '0000-00-00 00:00:00', '2024-09-13 14:49:02'),
(808, 'owner@owner.com', '[\"ROLE_OWNER\"]', '$2y$13$BgoljnYwjLayI3pGKSRCEOOkiCzhY9Sx.zPs2SpKSTlAQ7YA99R3y', 1, 'Alex', 'Dumesnier', '+1234567890', '2024-08-03 20:22:26', '2024-08-03 20:22:26'),
(810, 't.gregoire@owner.com', '[\"ROLE_OWNER\"]', '$2y$13$3eT6N0POn5w0WVNooATmmOZ.yeG79IXlIBW.3wwlsi0/qkI0dD6Wy', 1, 'Alex', 'Dumesnier', '+1234567890', '2024-09-10 09:08:26', '2024-09-10 09:08:26'),
(811, 'toue.gregoire@gmail.com', '[\"ROLE_USER\"]', '$2y$13$eYiAgfT5Qpmc3UDkA4e7BuR2O0gnDp8aC6DyE2iaGMpX81WN8TEsG', 1, 'Antonin', 'GREGOIRE', '+33695612944', '2024-09-10 09:20:34', '2024-09-10 09:20:34'),
(812, 'tounde.gregoire@gmail.com', '[\"ROLE_USER\"]', '$2y$13$oj4V2ti.sgjDs5snWJJnL.EH575.qtTxXqSsF25cHwBOVLRRHkfHG', 1, 'Antonin', 'GREGOIRE', '+33695612944', '2024-09-10 12:02:09', '2024-09-10 12:02:09'),
(814, 'ffgfgg@gmail.com', '[\"ROLE_USER\"]', '$2y$13$dhSdkkOzTl0FBACVIJo/qOJsnEvioNrvzmr.1Pg1y6xs2U/6DIBRy', 1, 'vvsvs', 'vsvsvs', '+33695612944', '2024-09-10 19:04:34', '2024-09-10 19:04:34'),
(816, 'tounde.gregddddoire@gmail.com', '[\"ROLE_ADMIN\", \"ROLE_USER\"]', '$2y$13$IofR0d4VPSksHYxuX1/3cuxWHNn9XyoOvn6ZbfkhmhaRw0LbexjOG', 1, 'ddddANTONIN TOUNDE', 'GREGOIRE', '96622564', '2024-09-14 07:03:28', '2024-09-14 07:03:28');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `FK_8F91ABF0A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_8F91ABF0AFFE2D26` FOREIGN KEY (`habitat_id`) REFERENCES `habitat` (`id`);

--
-- Contraintes pour la table `habitat`
--
ALTER TABLE `habitat`
  ADD CONSTRAINT `FK_3B37B2E812469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `FK_3B37B2E87E3C61F9` FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `FK_C53D045FAFFE2D26` FOREIGN KEY (`habitat_id`) REFERENCES `habitat` (`id`);

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `FK_B6BD307FCD53EDB6` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_B6BD307FF624B39D` FOREIGN KEY (`sender_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `FK_BF5476CAA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `FK_6D28840DB83297E7` FOREIGN KEY (`reservation_id`) REFERENCES `reservation` (`id`),
  ADD CONSTRAINT `FK_6D28840DE356BC49` FOREIGN KEY (`valide_id`) REFERENCES `status` (`id`);

--
-- Contraintes pour la table `promotion`
--
ALTER TABLE `promotion`
  ADD CONSTRAINT `FK_C11D7DD1AFFE2D26` FOREIGN KEY (`habitat_id`) REFERENCES `habitat` (`id`);

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `FK_42C849556BF700BD` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  ADD CONSTRAINT `FK_42C84955A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_42C84955AFFE2D26` FOREIGN KEY (`habitat_id`) REFERENCES `habitat` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
