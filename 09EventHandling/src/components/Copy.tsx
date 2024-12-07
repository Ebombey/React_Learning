const Copy = () => {
  const copyHandler = () => {
    console.log("Stop stealing my content!");
  };

  return (
    <>
      <p onCopy={copyHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita,
        consequuntur eos itaque dolorum accusantium fugiat illo maiores,
        veritatis officia eaque, amet ea qui repudiandae perspiciatis nostrum
        ipsa aliquid eum. Praesentium accusantium labore maxime, at dicta eaque
        explicabo dolor minus! Facilis voluptatem molestiae aspernatur possimus
        ipsam suscipit nesciunt eveniet enim est, dolore aliquid explicabo
        mollitia quos ducimus doloremque obcaecati dolorum? Cupiditate quibusdam
        vitae illum illo aliquam, blanditiis quaerat repudiandae magnam. Velit
        fuga culpa totam cum consequatur ea, odio numquam cumque? Consequuntur,
        vitae debitis excepturi iste incidunt beatae? Doloremque, aliquid omnis?
      </p>
    </>
  );
};

export default Copy;
