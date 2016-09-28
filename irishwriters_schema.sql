BEGIN TRANSACTION;
CREATE TABLE `pub_play` (
  `publication_id` integer NOT NULL DEFAULT '0'
,  `place_of_first_production_settlement` varchar(50) DEFAULT NULL
,  `place_of_first_production_county` varchar(50) DEFAULT NULL
,  `place_of_first_production_country` varchar(50) DEFAULT NULL
,  `first_revival_year` integer DEFAULT '0'
,  `first_revival_month` integer DEFAULT '0'
,  `first_revival_day` integer DEFAULT '0'
,  `place_of_first_revival_settlement` varchar(50) DEFAULT NULL
,  `place_of_first_revival_county` varchar(50) DEFAULT NULL
,  `place_of_first_revival_country` varchar(50) DEFAULT NULL
,  `theatre_company` integer DEFAULT '0'
,  `venue` varchar(50) DEFAULT NULL
,  `revival_venue` varchar(50) DEFAULT NULL
,  `notes` longtext
,  PRIMARY KEY (`publication_id`)
,  FOREIGN KEY (`publication_id`) REFERENCES `pub_Publications` (`DB_id`) ON UPDATE CASCADE
,  FOREIGN KEY (`theatre_company`) REFERENCES `comp_theatre` (`DB_id`) ON UPDATE CASCADE
);
CREATE TABLE `pub_movie` (
  `publication_id` integer NOT NULL DEFAULT '0'
,  `length_minutes` integer DEFAULT '0'
,  `production_company` integer DEFAULT '0'
,  `country_of_origin` varchar(50) DEFAULT NULL
,  `country_of_origin_2` varchar(50) DEFAULT NULL
,  `country_of_origin_3` varchar(50) DEFAULT NULL
,  `notes` longtext
,  `date_video` integer DEFAULT '0'
,  `date_dvd` integer DEFAULT '0'
,  PRIMARY KEY (`publication_id`)
,  FOREIGN KEY (`publication_id`) REFERENCES `pub_Publications` (`DB_id`) ON UPDATE CASCADE
,  FOREIGN KEY (`production_company`) REFERENCES `comp_movie` (`DB_id`) ON UPDATE CASCADE
);
CREATE TABLE `pub_journal_edition` (
  `publication_id` integer NOT NULL DEFAULT '0'
,  `publisher` integer DEFAULT '0'
,  `printer` integer DEFAULT '0'
,  `notes` longtext
,  `season` varchar(50) DEFAULT NULL
,  `from_year` integer DEFAULT '0'
,  `from_month` integer DEFAULT '0'
,  `to_year` integer DEFAULT '0'
,  `to_month` integer DEFAULT '0'
,  `edition_subseries` integer DEFAULT '0'
,  PRIMARY KEY (`publication_id`)
,  FOREIGN KEY (`publication_id`) REFERENCES `pub_Publications` (`DB_id`) ON UPDATE CASCADE
,  FOREIGN KEY (`season`) REFERENCES `list_seasons` (`DB_id`) ON UPDATE CASCADE
);
CREATE TABLE `pub_book_instances` (
  `id` char(50) DEFAULT 'GenGUID()'
,  `book_publication_id` integer DEFAULT '0'
,  `publisher` integer DEFAULT '0'
,  `printer` integer DEFAULT '0'
,  `loc_publication_settlement` varchar(50) DEFAULT NULL
,  `loc_publication_county` varchar(50) DEFAULT NULL
,  `loc_publication_country` varchar(50) DEFAULT NULL
,  FOREIGN KEY (`printer`) REFERENCES `comp_printers` (`DB_id`) ON UPDATE CASCADE
,  FOREIGN KEY (`publisher`) REFERENCES `comp_publishers` (`DB_id`) ON UPDATE CASCADE
,  FOREIGN KEY (`book_publication_id`) REFERENCES `pub_book` (`publication_id`) ON UPDATE CASCADE
);
CREATE TABLE `pub_book_chapter` (
  `publication_id` integer NOT NULL DEFAULT '0'
,  `published_in` integer DEFAULT '0'
,  `start_page` varchar(5) DEFAULT NULL
,  `end_page` varchar(5) DEFAULT NULL
,  `illustrated` varchar(10) DEFAULT NULL
,  `notes` longtext
,  PRIMARY KEY (`publication_id`)
,  FOREIGN KEY (`publication_id`) REFERENCES `pub_Publications` (`DB_id`) ON UPDATE CASCADE
,  FOREIGN KEY (`published_in`) REFERENCES `pub_book` (`publication_id`) ON UPDATE CASCADE
);
CREATE TABLE `pub_book` (
  `publication_id` integer NOT NULL DEFAULT '0'
,  `no_publisher` integer DEFAULT NULL
,  `no_location` integer DEFAULT NULL
,  `number_of_volumes` integer DEFAULT '0'
,  `number_of_pages` integer DEFAULT '0'
,  `illustrated` varchar(10) DEFAULT NULL
,  `known_reprints` integer DEFAULT '0'
,  `notes` longtext
,  PRIMARY KEY (`publication_id`)
,  FOREIGN KEY (`publication_id`) REFERENCES `pub_Publications` (`DB_id`) ON UPDATE CASCADE
);
CREATE TABLE `pub_article` (
  `publication_id` integer NOT NULL DEFAULT '0'
,  `published_in` integer DEFAULT '0'
,  `start_page` varchar(5) DEFAULT NULL
,  `end_page` varchar(5) DEFAULT NULL
,  `continued_on` varchar(5) DEFAULT NULL
,  `continuation_end` varchar(5) DEFAULT NULL
,  `illustrated` varchar(10) DEFAULT NULL
,  `notes` longtext
,  `article_subseries` integer DEFAULT '0'
,  `system` integer DEFAULT NULL
,  PRIMARY KEY (`publication_id`)
,  FOREIGN KEY (`publication_id`) REFERENCES `pub_Publications` (`DB_id`) ON UPDATE CASCADE
,  FOREIGN KEY (`publication_id`) REFERENCES `col_series` (`DB_id`) ON UPDATE CASCADE
);
CREATE TABLE `pub_Publications` (
  `DB_id` integer NOT NULL PRIMARY KEY AUTOINCREMENT
,  `title` varchar(255) DEFAULT NULL
,  `subtitle` varchar(255) DEFAULT NULL
,  `fiction_non-fiction` varchar(50) DEFAULT NULL
,  `genre` varchar(50) DEFAULT NULL
,  `is_first_edition` integer DEFAULT NULL
,  `first_edition_id` integer DEFAULT '0'
,  `this_edition_type` varchar(50) DEFAULT NULL
,  `in_series` integer DEFAULT '0'
,  `volume` double DEFAULT '0'
,  `volume_index_number` double DEFAULT '0'
,  `publish_year` integer DEFAULT '0'
,  `publish_month` integer DEFAULT '0'
,  `publish_day` integer DEFAULT '0'
,  `nd` integer DEFAULT NULL
,  `circa` integer DEFAULT NULL
,  `language1` varchar(50) DEFAULT NULL
,  `language2` varchar(50) DEFAULT NULL
,  `language3` varchar(50) DEFAULT NULL
,  `notes` longtext
,  `pub_type` integer DEFAULT '0'
,  `sources` longtext
,  `series_title` varchar(150) DEFAULT NULL
);
CREATE TABLE `people` (
  `DB_id` integer NOT NULL PRIMARY KEY AUTOINCREMENT
,  `title` varchar(50) DEFAULT NULL
,  `lastname_keyname` varchar(50) DEFAULT NULL
,  `alternative_spelling` varchar(50) DEFAULT NULL
,  `firstname` varchar(50) DEFAULT NULL
,  `firstname_alternative_spelling` varchar(50) DEFAULT NULL
,  `middle_names` varchar(50) DEFAULT NULL
,  `primary_researcher` varchar(3) DEFAULT NULL
,  `male_female` varchar(8) DEFAULT 'female'
,  `type_of_name` varchar(50) DEFAULT NULL
,  `is_alternative_name_of` integer DEFAULT '0'
,  `is_master_name` integer DEFAULT NULL
,  `dob_is_fl` integer DEFAULT '0'
,  `dob_is_circa` integer DEFAULT '0'
,  `birth_year` integer DEFAULT '0'
,  `birth_month` integer DEFAULT '0'
,  `birth_day_of_month` integer DEFAULT '0'
,  `born_settlement` varchar(50) DEFAULT NULL
,  `born_county` varchar(50) DEFAULT NULL
,  `born_country` varchar(50) DEFAULT NULL
,  `dod_is_fl` integer DEFAULT NULL
,  `dod_is_circa` integer DEFAULT '0'
,  `died_year` integer DEFAULT '0'
,  `died_month` integer DEFAULT '0'
,  `died_day_of_month` integer DEFAULT '0'
,  `died_settlement` varchar(50) DEFAULT NULL
,  `died_county` varchar(50) DEFAULT NULL
,  `died_country` varchar(50) DEFAULT NULL
,  `associated_places` longtext
,  `education` varchar(10) DEFAULT NULL
,  `last_edited` datetime DEFAULT NULL
,  `notes` longtext
,  `sources` longtext
,  `completed` integer DEFAULT NULL
);
CREATE TABLE `loc_venues` (
  `venue_name` varchar(100) NOT NULL
,  PRIMARY KEY (`venue_name`)
);
CREATE TABLE `loc_settlements` (
  `settlement` varchar(50) NOT NULL
,  PRIMARY KEY (`settlement`)
);
CREATE TABLE `loc_countries` (
  `country` varchar(50) NOT NULL
,  PRIMARY KEY (`country`)
);
CREATE TABLE `loc_counties` (
  `county` varchar(50) NOT NULL
,  PRIMARY KEY (`county`)
);
CREATE TABLE `list_version_types` (
  `version_type` varchar(50) NOT NULL
,  PRIMARY KEY (`version_type`)
);
CREATE TABLE `list_series_types` (
  `series_type` varchar(50) DEFAULT NULL
);
CREATE TABLE `list_seasons` (
  `DB_ID` char(50) NOT NULL DEFAULT 'GenGUID()'
,  `season` varchar(50) DEFAULT NULL
,  PRIMARY KEY (`DB_ID`)
);
CREATE TABLE `list_publication_types` (
  `id` integer NOT NULL DEFAULT '0'
,  `publication_type` varchar(50) DEFAULT NULL
,  PRIMARY KEY (`id`)
);
CREATE TABLE `list_name_types` (
  `id` char(50) NOT NULL DEFAULT 'GenGUID()'
,  `type` varchar(35) DEFAULT NULL
,  PRIMARY KEY (`id`)
);
CREATE TABLE `list_manuscripts` (
  `id` char(50) NOT NULL DEFAULT 'GenGUID()'
,  `title_or_description` varchar(150) DEFAULT NULL
,  `reference_id` varchar(50) DEFAULT NULL
,  `collection` char(50) DEFAULT NULL
,  PRIMARY KEY (`id`)
);
CREATE TABLE `list_languages` (
  `language` varchar(50) NOT NULL
,  PRIMARY KEY (`language`)
);
CREATE TABLE `list_genres` (
  `genre_type` varchar(50) DEFAULT NULL
);
CREATE TABLE `list_collections` (
  `DB_ID` char(50) NOT NULL DEFAULT 'GenGUID()'
,  `collection_name` varchar(50) DEFAULT NULL
,  `repository` char(50) DEFAULT NULL
,  PRIMARY KEY (`DB_ID`)
,  CONSTRAINT `{837E1F97-F566-4786-BA32-DA361897A208}` FOREIGN KEY (`repository`) REFERENCES `comp_repositories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);
CREATE TABLE `list_book_formats` (
  `format` varchar(50) NOT NULL
,  `s_Lineage` longblob
,  PRIMARY KEY (`format`)
);
CREATE TABLE `comp_theatre` (
  `DB_id` integer NOT NULL PRIMARY KEY AUTOINCREMENT
,  `company_name` varchar(50) DEFAULT NULL
,  `notes` longtext
);
CREATE TABLE `comp_repositories` (
  `id` char(50) NOT NULL DEFAULT 'GenGUID()'
,  `repository_name` varchar(50) DEFAULT NULL
,  PRIMARY KEY (`id`)
);
CREATE TABLE `comp_publishers` (
  `DB_id` integer NOT NULL PRIMARY KEY AUTOINCREMENT
,  `company_name` varchar(50) DEFAULT NULL
,  `settlement` varchar(50) DEFAULT NULL
,  `county` varchar(50) DEFAULT NULL
,  `country` varchar(50) DEFAULT NULL
,  `notes` longtext
);
CREATE TABLE `comp_printers` (
  `DB_id` integer NOT NULL PRIMARY KEY AUTOINCREMENT
,  `company_name` varchar(50) DEFAULT NULL
,  `settlement` varchar(50) DEFAULT NULL
,  `county` varchar(50) DEFAULT NULL
,  `country` varchar(50) DEFAULT NULL
,  `notes` longtext
);
CREATE TABLE `comp_movie` (
  `DB_id` integer NOT NULL PRIMARY KEY AUTOINCREMENT
,  `company_name` varchar(50) DEFAULT NULL
,  `notes` longtext
);
CREATE TABLE `col_volumes` (
  `DB_id` integer NOT NULL PRIMARY KEY AUTOINCREMENT
,  `publication_id` integer DEFAULT '0'
,  `volume_title` varchar(50) DEFAULT NULL
,  `volume_number` integer DEFAULT '0'
,  `number_of_pages` integer DEFAULT '0'
);
CREATE TABLE `col_titles` (
  `title` varchar(50) NOT NULL
,  PRIMARY KEY (`title`)
);
CREATE TABLE `col_series` (
  `DB_id` integer NOT NULL PRIMARY KEY AUTOINCREMENT
,  `series_title` varchar(150) DEFAULT NULL
,  `series_sub_title` varchar(150) DEFAULT NULL
,  `series_type` varchar(50) DEFAULT NULL
,  `previous_id` integer DEFAULT '0'
,  `notes` longtext
);
CREATE TABLE `col_researchers` (
  `firstname` varchar(50) DEFAULT NULL
,  `surname` varchar(50) DEFAULT NULL
,  `initials` varchar(3) NOT NULL
,  PRIMARY KEY (`initials`)
);
CREATE TABLE `col_publication_language` (
  `publication_id` integer DEFAULT '0'
,  `language` varchar(50) DEFAULT NULL
);
CREATE TABLE `col_people_manuscripts` (
  `DB_ID` char(50) NOT NULL DEFAULT 'GenGUID()'
,  `person` integer DEFAULT '0'
,  `manuscript` char(50) DEFAULT NULL
,  PRIMARY KEY (`DB_ID`)
,  FOREIGN KEY (`person`) REFERENCES `people` (`DB_ID`) ON UPDATE CASCADE
);
CREATE TABLE `col_Authors` (
  `DB_id` integer NOT NULL PRIMARY KEY AUTOINCREMENT
,  `person_id` integer DEFAULT '0'
,  `publication_id` integer DEFAULT '0'
,  `is_sole_author` integer DEFAULT NULL
,  `is_main_author` integer DEFAULT NULL
,  `is_co_author` integer DEFAULT NULL
,  `is_editor` integer DEFAULT NULL
,  `is_co-editor` integer DEFAULT NULL
,  `is_foreword_author` integer DEFAULT NULL
,  `is_translator` integer DEFAULT NULL
,  `is_illustrator` integer DEFAULT NULL
,  `is_ghost` integer DEFAULT NULL
,  `is_preface` integer DEFAULT NULL
,  `is_original_author` integer DEFAULT NULL
,  `is_sub_editor` integer DEFAULT NULL
,  `is_compiler` integer DEFAULT NULL
,  `is_introduction_author` integer DEFAULT NULL
,  `is_notes_author` integer DEFAULT NULL
,  `is_director` integer DEFAULT NULL
,  `is_co_director` integer DEFAULT NULL
,  `is_producer` integer DEFAULT NULL
,  `is_executive_producer` integer DEFAULT NULL
,  `is_co_producer` integer DEFAULT NULL
,  `is_scriptwriter` integer DEFAULT NULL
,  `is_co_scriptwriter` integer DEFAULT NULL
,  `is_screenwriter` integer DEFAULT NULL
,  `is_co_screenwriter` integer DEFAULT NULL
,  `is_cinematographer` integer DEFAULT NULL
,  `is_animator` integer DEFAULT NULL
,  `Gen_notes` integer DEFAULT NULL
,  `is_interviewer` integer DEFAULT NULL
,  `is_interviewee` integer DEFAULT NULL
,  `notes` longtext
,  FOREIGN KEY (`person_id`) REFERENCES `people` (`DB_ID`) ON UPDATE CASCADE
);
CREATE INDEX "idx_pub_play_edition_id" ON "pub_play" (`publication_id`);
CREATE INDEX "idx_pub_movie_edition_id" ON "pub_movie" (`publication_id`);
CREATE INDEX "idx_pub_journal_edition_edition_id" ON "pub_journal_edition" (`publication_id`);
CREATE INDEX "idx_pub_book_number_of_volumes" ON "pub_book" (`number_of_volumes`);
CREATE INDEX "idx_pub_book_number_of_pages" ON "pub_book" (`number_of_pages`);
CREATE INDEX "idx_pub_book_instances_publication_ID" ON "pub_book_instances" (`book_publication_id`);
CREATE INDEX "idx_pub_book_instances_id" ON "pub_book_instances" (`id`);
CREATE INDEX "idx_pub_book_edition_id" ON "pub_book" (`publication_id`);
CREATE INDEX "idx_pub_book_chapter_number_of_pages" ON "pub_book_chapter" (`end_page`);
CREATE INDEX "idx_pub_book_chapter_edition_id" ON "pub_book_chapter" (`publication_id`);
CREATE INDEX "idx_pub_article_number_of_pages" ON "pub_article" (`end_page`);
CREATE INDEX "idx_pub_article_edition_id" ON "pub_article" (`publication_id`);
CREATE INDEX "idx_pub_Publications_DB_id" ON "pub_Publications" (`DB_id`);
CREATE INDEX "idx_list_series_types_series_type" ON "list_series_types" (`series_type`);
CREATE INDEX "idx_list_seasons_DB_ID" ON "list_seasons" (`DB_ID`);
CREATE INDEX "idx_list_publication_types_id" ON "list_publication_types" (`id`);
CREATE INDEX "idx_list_name_types_id" ON "list_name_types" (`id`);
CREATE INDEX "idx_list_manuscripts_reference_id" ON "list_manuscripts" (`reference_id`);
CREATE INDEX "idx_list_manuscripts_id" ON "list_manuscripts" (`id`);
CREATE INDEX "idx_list_genres_genre_type" ON "list_genres" (`genre_type`);
CREATE INDEX "idx_list_collections_{837E1F97-F566-4786-BA32-DA361897A208}" ON "list_collections" (`repository`);
CREATE INDEX "idx_list_collections_DB_ID" ON "list_collections" (`DB_ID`);
CREATE INDEX "idx_comp_theatre_DB_id" ON "comp_theatre" (`DB_id`);
CREATE INDEX "idx_comp_repositories_id" ON "comp_repositories" (`id`);
CREATE INDEX "idx_comp_publishers_DB_id" ON "comp_publishers" (`DB_id`);
CREATE INDEX "idx_comp_movie_DB_id" ON "comp_movie" (`DB_id`);
CREATE INDEX "idx_col_volumes_publication_id" ON "col_volumes" (`publication_id`);
CREATE INDEX "idx_col_volumes_number_of_pages" ON "col_volumes" (`number_of_pages`);
CREATE INDEX "idx_col_volumes_DB_id" ON "col_volumes" (`DB_id`);
CREATE INDEX "idx_col_series_previous_id" ON "col_series" (`previous_id`);
CREATE INDEX "idx_col_series_DB_id" ON "col_series" (`DB_id`);
CREATE INDEX "idx_col_publication_language_publication_id" ON "col_publication_language" (`publication_id`);
CREATE INDEX "idx_col_people_manuscripts_DB_ID" ON "col_people_manuscripts" (`DB_ID`);
CREATE INDEX "idx_col_Authors_edition_id" ON "col_Authors" (`publication_id`);
CREATE INDEX "idx_col_Authors_Person_id" ON "col_Authors" (`person_id`);
CREATE INDEX "idx_col_Authors_DB_id" ON "col_Authors" (`DB_id`);
CREATE INDEX "idx_People_DB_id" ON "People" (`DB_id`);
COMMIT;
