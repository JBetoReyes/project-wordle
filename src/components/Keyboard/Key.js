const Key = ({ label, status }) => {
  return <div className={`key ${status}`}>{label}</div>;
};

export default Key;
