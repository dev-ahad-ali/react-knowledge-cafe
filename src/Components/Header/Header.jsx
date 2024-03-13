import profile from '../../assets/img/profile.png';
const Header = () => {
  return (
    <div className="container flex justify-between items-center p-5 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile}></img>
    </div>
  );
};

export default Header;
