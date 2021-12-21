/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     21/12/2021 2:53:44                           */
/*==============================================================*/




/*==============================================================*/
/* Table: DETALLE_RESERVA                                       */
/*==============================================================*/
create table DETALLE_RESERVA (
   ID_DETALLLES_SEPARAR SERIAL               not null,
   ID_PRACTICA          INT4                 not null,
   NUMERO_MAQUINAS_USAR INT4                 not null,
   FECHA_RESERVA        DATE                 not null,
   HORARIO_INICIO       TIME                 not null,
   HORARIO_FIN          TIME                 not null,
   constraint PK_DETALLE_RESERVA primary key (ID_DETALLLES_SEPARAR)
);

/*==============================================================*/
/* Index: DETALLES_SEPARAR_LABORATORIO_PK                       */
/*==============================================================*/
create unique index DETALLES_SEPARAR_LABORATORIO_PK on DETALLE_RESERVA (
ID_DETALLLES_SEPARAR
);

/*==============================================================*/
/* Index: RELATIONSHIP_10_FK                                    */
/*==============================================================*/
create  index RELATIONSHIP_10_FK on DETALLE_RESERVA (
ID_PRACTICA
);

/*==============================================================*/
/* Table: DOCENTE                                               */
/*==============================================================*/
create table DOCENTE (
   ID_DOCENTE           SERIAL               not null,
   ID_MATERIA           INT4                 not null,
   NOMBRE_DOCENTE       VARCHAR(30)          not null,
   APELLIDO_DOCENTE     VARCHAR(30)          not null,
   TELEFONO_DOCENTE     VARCHAR(10)          not null,
   CORREO_DOCENTE       VARCHAR(50)          not null,
   USUARIO_DOCENTE      VARCHAR(30)          not null,
   CONTRASENA_DOCENTE   VARCHAR(30)          not null,
   constraint PK_DOCENTE primary key (ID_DOCENTE)
);

/*==============================================================*/
/* Index: DOCENTE_PK                                            */
/*==============================================================*/
create unique index DOCENTE_PK on DOCENTE (
ID_DOCENTE
);

/*==============================================================*/
/* Index: RELATIONSHIP_1_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_1_FK on DOCENTE (
ID_MATERIA
);

/*==============================================================*/
/* Table: ENTREGA_LABORATORIO                                   */
/*==============================================================*/
create table ENTREGA_LABORATORIO (
   ID_ENTREGA_LABORATORIO SERIAL               not null,
   ID_OBSERVACION       INT4                 not null,
   ID_SEPARAR_LABORATORIO INT4                 not null,
   FECHA_ENTREGA_LABORATORIO DATE                 not null,
   constraint PK_ENTREGA_LABORATORIO primary key (ID_ENTREGA_LABORATORIO)
);

/*==============================================================*/
/* Index: ENTREGA_LABORATORIO_PK                                */
/*==============================================================*/
create unique index ENTREGA_LABORATORIO_PK on ENTREGA_LABORATORIO (
ID_ENTREGA_LABORATORIO
);

/*==============================================================*/
/* Index: RELATIONSHIP_7_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_7_FK on ENTREGA_LABORATORIO (
ID_OBSERVACION
);

/*==============================================================*/
/* Index: RELATIONSHIP_8_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_8_FK on ENTREGA_LABORATORIO (
ID_SEPARAR_LABORATORIO
);

/*==============================================================*/
/* Table: LABORATORIO                                           */
/*==============================================================*/
create table LABORATORIO (
   ID_LABORATORIO       SERIAL               not null,
   NOMBRE_LABORATORIO   VARCHAR(30)          not null,
   NUMERO_MAQUINAS      INT4                 not null,
   ESTADO_LABORATORIO   BOOL                 not null,
   constraint PK_LABORATORIO primary key (ID_LABORATORIO)
);

/*==============================================================*/
/* Index: LABORATORIO_PK                                        */
/*==============================================================*/
create unique index LABORATORIO_PK on LABORATORIO (
ID_LABORATORIO
);

/*==============================================================*/
/* Table: MATERIA                                               */
/*==============================================================*/
create table MATERIA (
   ID_MATERIA           SERIAL               not null,
   NOMBRE_MATERIA       VARCHAR(255)         not null,
   constraint PK_MATERIA primary key (ID_MATERIA)
);

/*==============================================================*/
/* Index: MATERIA_PK                                            */
/*==============================================================*/
create unique index MATERIA_PK on MATERIA (
ID_MATERIA
);

/*==============================================================*/
/* Table: OBSERVACION                                           */
/*==============================================================*/
create table OBSERVACION (
   ID_OBSERVACION       SERIAL               not null,
   DESCRIPCION_OBSERVACION VARCHAR(255)         not null,
   RECOMENDACION        VARCHAR(255)         not null,
   constraint PK_OBSERVACION primary key (ID_OBSERVACION)
);

/*==============================================================*/
/* Index: OBSERVACION_PK                                        */
/*==============================================================*/
create unique index OBSERVACION_PK on OBSERVACION (
ID_OBSERVACION
);

/*==============================================================*/
/* Table: PRACTICA                                              */
/*==============================================================*/
create table PRACTICA (
   ID_PRACTICA          SERIAL               not null,
   DESCRIPCION_PRACTICA VARCHAR(255)         not null,
   constraint PK_PRACTICA primary key (ID_PRACTICA)
);

/*==============================================================*/
/* Index: PRACTICA_PK                                           */
/*==============================================================*/
create unique index PRACTICA_PK on PRACTICA (
ID_PRACTICA
);

/*==============================================================*/
/* Table: SEPARAR_LABORATORIO                                   */
/*==============================================================*/
create table SEPARAR_LABORATORIO (
   ID_SEPARAR_LABORATORIO SERIAL               not null,
   ID_DETALLLES_SEPARAR INT4                 not null,
   ID_LABORATORIO       INT4                 not null,
   ID_DOCENTE           INT4                 not null,
   constraint PK_SEPARAR_LABORATORIO primary key (ID_SEPARAR_LABORATORIO)
);

/*==============================================================*/
/* Index: SEPARAR_LABORATORIO_PK                                */
/*==============================================================*/
create unique index SEPARAR_LABORATORIO_PK on SEPARAR_LABORATORIO (
ID_SEPARAR_LABORATORIO
);

/*==============================================================*/
/* Index: RELATIONSHIP_3_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_3_FK on SEPARAR_LABORATORIO (
ID_DETALLLES_SEPARAR
);

/*==============================================================*/
/* Index: TIENE_UN_FK                                           */
/*==============================================================*/
create  index TIENE_UN_FK on SEPARAR_LABORATORIO (
ID_LABORATORIO
);

/*==============================================================*/
/* Index: RELATIONSHIP_9_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_9_FK on SEPARAR_LABORATORIO (
ID_DOCENTE
);

alter table DETALLE_RESERVA
   add constraint FK_DETALLE__RELATIONS_PRACTICA foreign key (ID_PRACTICA)
      references PRACTICA (ID_PRACTICA)
      on delete restrict on update restrict;

alter table DOCENTE
   add constraint FK_DOCENTE_RELATIONS_MATERIA foreign key (ID_MATERIA)
      references MATERIA (ID_MATERIA)
      on delete restrict on update restrict;

alter table ENTREGA_LABORATORIO
   add constraint FK_ENTREGA__RELATIONS_OBSERVAC foreign key (ID_OBSERVACION)
      references OBSERVACION (ID_OBSERVACION)
      on delete restrict on update restrict;

alter table ENTREGA_LABORATORIO
   add constraint FK_ENTREGA__RELATIONS_SEPARAR_ foreign key (ID_SEPARAR_LABORATORIO)
      references SEPARAR_LABORATORIO (ID_SEPARAR_LABORATORIO)
      on delete restrict on update restrict;

alter table SEPARAR_LABORATORIO
   add constraint FK_SEPARAR__RELATIONS_DETALLE_ foreign key (ID_DETALLLES_SEPARAR)
      references DETALLE_RESERVA (ID_DETALLLES_SEPARAR)
      on delete restrict on update restrict;

alter table SEPARAR_LABORATORIO
   add constraint FK_SEPARAR__RELATIONS_DOCENTE foreign key (ID_DOCENTE)
      references DOCENTE (ID_DOCENTE)
      on delete restrict on update restrict;

alter table SEPARAR_LABORATORIO
   add constraint FK_SEPARAR__TIENE_UN_LABORATO foreign key (ID_LABORATORIO)
      references LABORATORIO (ID_LABORATORIO)
      on delete restrict on update restrict;

