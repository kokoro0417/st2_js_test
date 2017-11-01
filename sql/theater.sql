drop database if exists theater;
create database if not exists theater;

use theater;

drop table if exists user_data;

create table user_data(
user_id varchar(255) not null primary key,
password varchar(255)
);

insert into user_data value
("taro","123"),
("jiro","456"),
("hanako","789")
;

drop table if exists buy_seat_list;

create table buy_seat_list(
screen_id int not null,
time_id int not null,
buy_seat_id int not null primary key,
user_id varchar(255)
);
