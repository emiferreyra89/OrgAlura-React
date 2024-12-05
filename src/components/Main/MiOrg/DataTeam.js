import { v4 as uuid } from "uuid";

export default function dataTeam () {
   const data =  [
    {
      id:uuid(),
      teamName:"Programación",
      primaryColor:"#57C278",
      secondaryColor:"#D9F7E9"
    },
    {
      id:uuid(),
      teamName:"Front End",
      primaryColor:"#82CFFA",
      secondaryColor:"#E8F8FF"
    },
    {
      id:uuid(),
      teamName:"Data Science",
      primaryColor:"#A6D157",
      secondaryColor:"#F0F8E2"
    },
    {
      id:uuid(),
      teamName:"Devops",
      primaryColor:"#E06B69",
      secondaryColor:"#FDE7E8"
    },
    {
      id:uuid(),
      teamName:"UX y Diseño",
      primaryColor:"#DB6EBF",
      secondaryColor:"#FAE9F5"
    },
    {
      id:uuid(),
      teamName:"Móvil",
      primaryColor:"#FFBA05",
      secondaryColor:"#FFF5D9"
    },
    {
      id:uuid(),
      teamName:"Innovación y Gestión",
      primaryColor:"#FF8A29",
      secondaryColor:"#FFEEDF"
    }
  ];

  return data;
}