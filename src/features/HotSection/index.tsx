import Typography from "../../components/ui/Typography"; // поправь путь к Typography

const HotSection = () => {
  return (
    <section className="w-full py-10 px-20 font-montserrat">
      <Typography type="h2" variant="25-900" className="mb-4">
        Горячие поступления
      </Typography>
    </section>
  );
};

export default HotSection;