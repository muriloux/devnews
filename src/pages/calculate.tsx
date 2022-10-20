import dynamic from "next/dynamic";
import { useState } from "react";
// import { Modal } from "../components/Modal";

const Modal = dynamic(
  () => import("../components/Modal").then((mod) => mod.Modal),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export default function Calculate() {
  const [modalVisible, setModalVisible] = useState(false);

  async function handleSum() {
    const calc = (await import("../libs/calc")).default;
    alert(calc.sum(1, 2));
  }

  function handleModalVisible() {
    setModalVisible(true);
  }

  return (
    <>
      <h1>Calculo</h1>
      <button
        onClick={() => {
          handleSum();
          handleModalVisible();
        }}
      >
        Sum
      </button>

      {modalVisible && <Modal />}
    </>
  );
}
