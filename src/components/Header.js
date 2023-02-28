import logo from '../assets/logo.png'

export default function Header() {
  return <div className="Header">
    <img src={logo} alt="zaprecall-logo"/>
    <h1>ZapRecall</h1>
  </div>;
}
