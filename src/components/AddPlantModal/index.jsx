import SearchBar from "../SearchBar/index";


function AddPlantModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

}

return (
  <>
    <Button type="primary" onClick={showModal}>
      Add New Plant
    </Button>
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {/* insert SEARCH BAR here */}
      <SearchBar />
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  </>
);


export default AddPlantModal;