CREATE TABLE tx_nspersonio_domain_model_jobs (
	jobid varchar(255) NOT NULL DEFAULT '',
	subcompany varchar(255) NOT NULL DEFAULT '',
	office varchar(255) NOT NULL DEFAULT '',
	recruitingcategory varchar(255) NOT NULL DEFAULT '',
	name varchar(255) NOT NULL DEFAULT '',
	descriptions text,
	employmenttype varchar(255) NOT NULL DEFAULT '',
	seniority varchar(255) NOT NULL DEFAULT '',
	schedule varchar(255) NOT NULL DEFAULT '',
	experience varchar(255) NOT NULL DEFAULT '',
	occupation varchar(255) NOT NULL DEFAULT '',
	occupationcategory varchar(255) NOT NULL DEFAULT '',
	createdat varchar(255) NOT NULL DEFAULT '',
	department int(11) unsigned DEFAULT '0',
	language_code varchar(255) NOT NULL DEFAULT '',
	slug varchar(255) NOT NULL DEFAULT '',
);

CREATE TABLE tx_nspersonio_domain_model_department (
	name varchar(255) NOT NULL DEFAULT '',
	language_code varchar(255) NOT NULL DEFAULT '',
);
