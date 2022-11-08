import React, { ReactElement } from "react";
import { Tabs } from "antd";
import FormAluno from "../../component/FormAluno/FormAluno";
import BaseContainer from "../../component/BaseContainer/BaseContainer";
import { FileTextOutlined } from "@ant-design/icons";
import student_image from '../../assets/student_form_image.svg'
import professor_image from '../../assets/teacher_image.svg'
import subject_image from '../../assets/subject_image.svg'
import FormProfessor from "../../component/FormProfessor.tsx/FormProfessor";
import FormDisciplina from "../../component/FormDisciplina/FormDisciplina";

const Cadastro = (): ReactElement => {
  return (
    <div className="bg-white p-5 m-5 rounded-md flex flex-col w-11/12">
      <div className="flex w-full mb-3">
        <span className="bg-logoDarkPurple w-9 h-9 text-center leading-7 rounded-md">
          <FileTextOutlined style={{color: "#ffffff", fontSize: "12px"}} />
        </span>
        <p className="mt-2 ml-2 text-base">
          Cadastro de Aluno, Professores, Disciplinas
        </p>
      </div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Aluno" key="1">
          <div className="flex justify-center">
            <BaseContainer className="flex w-11/12 bg-gray-100 justify-center align-middle rounded-xl">
              <div className="flex w-full h-full ">
                <FormAluno />
                <img className="w-80 mr-8 mb-8" src={student_image} alt="" />
              </div>
            </BaseContainer>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Professor" key="2">
        <div className="flex justify-center">
            <BaseContainer className="flex w-11/12 bg-gray-100 justify-center align-middle rounded-xl">
              <div className="flex w-full h-full ">
                <FormProfessor />
                <img className="w-80 mr-8 mb-8" src={professor_image} alt="" />
              </div>
            </BaseContainer>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Disciplina" key="3">
        <div className="flex justify-center">
            <BaseContainer className="flex w-11/12 bg-gray-100 justify-center align-middle rounded-xl">
              <div className="flex w-full h-full ">
                <FormDisciplina />
                <img className="w-80 mr-8 mb-8" src={subject_image} alt="" />
              </div>
            </BaseContainer>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Cadastro;
