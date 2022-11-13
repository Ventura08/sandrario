import { Form, Input, Select } from "antd";
import { RequiredMark } from "antd/lib/form/Form";
import React, { ReactElement, useCallback, useState, useEffect } from "react";
import { DisciplinaInterface } from "../../interfaces/disciplinaInterface";
import { ProfessorInterface } from "../../interfaces/professorInterface";
import { TurmasInterface } from "../../interfaces/turmaInterface";
import { getAllDisciplinas } from "../../services/disciplinaService";
import { getAllProfessores } from "../../services/professorService";
import { getAllTurmas } from "../../services/turmasService";
import CustomButton from "../Button/Button";

interface FormHorarioProps {
    className?: string;
    teste: boolean;
}

const FormHorario = (props: FormHorarioProps): ReactElement => {
  const [selectValues, setSelectValues] = useState<{
    professor: string | undefined;
    disciplina: string | undefined;
    turma: string | undefined;
    subject: string | undefined;
  }>({ professor: undefined, disciplina: undefined, turma: undefined, subject: undefined })

  const [professor, setProfessor] = useState<ProfessorInterface[]>()
  const [disciplina, setDisciplina] = useState<DisciplinaInterface[]>()
  const [turma, setTurma] = useState<TurmasInterface[]>()

    const [form] = Form.useForm();
   
    const [requiredMark, setRequiredMarkType] =
      useState<RequiredMark>("optional");
  
    const onRequiredTypeChange = ({
      requiredMarkValue,
    }: {
      requiredMarkValue: RequiredMark;
    }) => {
      setRequiredMarkType(requiredMarkValue);
    };

    const handleStatus = async (value: string) => {
      console.log(value)
    }

    const handleDisciplina = async (value: string) => {
      console.log(value)
    }
  

     const handleTurma = async (value: string) => {
      console.log(value)
    }
   
    const getTurmas = useCallback(async () => {
      await getAllTurmas().then((res) => {
        setTurma(res.data)
      })
    }, [])

    const getDisciplinas = useCallback(async () => {
      await getAllDisciplinas().then((res) => {
        setDisciplina(res.data)
      })
    }, [])
  

    const getProfessores = useCallback(async () => {
      await getAllProfessores().then((res) => {
        setProfessor(res.data)
      })
    }, [])

    useEffect(() => {
      getProfessores()
      getDisciplinas()
      getTurmas()
    }, [getProfessores, getDisciplinas, getTurmas])

    return (
      <div className="w-full h-full flex flex-col">
        <Form
          className={"w-full p-7"}
          form={form}
          layout="vertical"
          initialValues={{ requiredMarkValue: requiredMark }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          <Form.Item label="Turma" required>
          <Select
              allowClear
              showSearch
              placeholder="Selecione a Turma"
              value={selectValues?.turma}
              onChange={handleTurma}
              style={{ width: '100%' }}
            >
              {turma?.map((item) => (
                <Select.Option key={item.id} value={item.nome}>
                  {item.nome}
                </Select.Option>
              ))}
          </Select>
          </Form.Item>
          <Form.Item label="Disciplina" required>
          <Select
              allowClear
              showSearch
              placeholder="Selecione a Disciplina"
              value={selectValues?.disciplina}
              onChange={handleDisciplina}
              style={{ width: '100%' }}
            >
              {disciplina?.map((item) => (
                <Select.Option key={item.id} value={item.nome}>
                  {item.nome}
                </Select.Option>
              ))}
          </Select>
          </Form.Item>
          <Form.Item label="Professor" required>
          <Select
              allowClear
              showSearch
              placeholder="Selecione o Professor"
              value={selectValues?.professor}
              onChange={handleStatus}
              style={{ width: '100%' }}
            >
              {professor?.map((item) => (
                <Select.Option key={item.id} value={item.nome}>
                  {item.nome}
                </Select.Option>
              ))}
          </Select>
          </Form.Item>
        </Form>
        <div className="self-end">
          <CustomButton className={``} onClick={() => console.log('NESSE CLICK A GENTE DA O SUBMIT DO ALUNO')}/>
        </div>
      </div>
    );
  };
  
  export default FormHorario;