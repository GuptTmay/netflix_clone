const FooterTag = ({ info, link }) => {
  return (
    <div className="w-3xs p-1 mt-1">
      <a href={link} className="text-sm hover:text-gray-500 w-full underline">
        {info}
      </a>
    </div>
  );
};

export default FooterTag;
