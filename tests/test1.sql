use meu_banco;
select * from doidao;
create database gustavo_portfolio;

create table projeto(
	proj_id int not null auto_increment,
    proj_name varchar(255) not null,
    proj_desc varchar(255) not null,
    proj_image_src blob,
    proj_image_url varchar(255),
    proj_link_github varchar(255),
    primary key (proj_id)
);
alter table projeto add proj_link_demo varchar(255);

insert into projeto(proj_name, proj_desc, proj_image_url, proj_link_github) values 
('Portfolio', 'Meu portfolio', 'https://neilpatel.com/wp-content/uploads/fly-images/52505/portfolio-1200x675-c.jpg', 'https://github.com/gustavodscruz/portfolio-gusta');

select * from projeto;

desc projeto;

create table certificado (
	cert_id int not null auto_increment,
    cert_name varchar(255) not null,
    cert_desc varchar(255) not null,
    cert_image_src blob,
    cert_image_url varchar(255),
    cert_link varchar(255),
    primary key (cert_id)
);

desc projeto;
desc certificado;

create table tag(
	tag_id int not null auto_increment,
    tag_name varchar(100) not null,
    primary key (tag_id)
);
-- o 1 vai se referir a um projeto e o 2 vai se referir a um certificado
create table tag_union(
	union_id int not null auto_increment, 
    tag_id int not null,
    proj_id int not null,
    union_type int not null,
    primary key(union_id),
    foreign key (tag_id) references tag(tag_id),
    foreign key (proj_id) references projeto(proj_id),
    check(union_type=1 or union_type=2)
);

desc projeto;

