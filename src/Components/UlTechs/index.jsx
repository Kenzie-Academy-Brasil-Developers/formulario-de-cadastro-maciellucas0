import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { api } from "../../Services/api";
import { LiTechs } from "./style";

const ListaTechs = ({ techs, setTech }) => {
  function removeTech(id) {
    console.log(id);

    api
      .delete(`/users/techs/${id}`)
      .then(() => {
        const result = techs.filter((item) => id !== item.id);
        setTech(result);
        toast.success("Tecnologia Deletada com sucesso", {
          style: {
            fontFamily: "Inter",
          },
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Ops , Algo deu errado. ", {
          style: {
            fontFamily: "Inter",
          },
        });
      });
  }

  return (
    <>
      {techs?.map((tecnologia) => (
        <LiTechs key={tecnologia.id}>
          <h2>{tecnologia.title}</h2>
          <p>{tecnologia.status}</p>
          <button onClick={() => removeTech(tecnologia.id)}>
            <FaTrashAlt />
          </button>
        </LiTechs>
      ))}
    </>
  );
};
export default ListaTechs;
