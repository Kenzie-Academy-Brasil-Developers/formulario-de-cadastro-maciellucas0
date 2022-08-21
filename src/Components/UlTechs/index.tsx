import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { api } from "../../Services/api";
import { LiTechs } from "./style";

const ListaTechs = ({ techs, setTech }) => {
  function removeTech(id: string) {
    api
      .delete(`/users/techs/${id}`)
      .then(() => {
        const result = techs.filter((item: { id: string }) => id !== item.id);
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
      {techs?.map(
        (tecnologia: { id: string; title: string; status: string }) => (
          <LiTechs key={tecnologia.id}>
            <h2>{tecnologia.title}</h2>
            <p>{tecnologia.status}</p>
            <button onClick={() => removeTech(tecnologia.id)}>
              <FaTrashAlt />
            </button>
          </LiTechs>
        )
      )}
    </>
  );
};
export default ListaTechs;
