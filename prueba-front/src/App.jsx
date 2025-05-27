import Title from "./components/Title";
import Human from "./components/Human";
import "./App.css";

function App() {
  const humans = [
    {
      name: "Nico",
      planet: "Earth",
      image:
        "https://imgs.search.brave.com/96l8G3b1LvWypDIKGmx12iUZ_tGakOBiTwubjkjU2k0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20va0c3cHFz/NDNWLVJRcFNiX3Rv/eVBtTUpOWGZuNU1h/cXMyd3N2MlB5ZWxZ/TS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk9E/WTUvT0RReE1UYzRM/M0JvYjNSdi9MMmR5/YjNWd0xXOW1MWGR2/L2JXRnVMV3h2YjJ0/cGJtY3QvWVhRdGJX/OWtaWEp1TFhCaC9h/VzUwYVc1bkxXbHVM/V0Z5L2RDMW5ZV3hz/WlhKNUxtcHcvWno5/elBUWXhNbmcyTVRJ/bS9kejB3Sm1zOU1q/QW1ZejF0L2JVNDVk/VmcyU1hOSU5WRm0v/YTBWMlRVOUtOV05z/UW1Sbi9UVWM1UTB4/d2VqZHlUMVJJL1Jr/SkpSMDh3UFE.jpeg",
    },
    {
      name: "Jorge",
      planet: "Mars",
      image:
        "https://imgs.search.brave.com/fj_-j5YgNzmDLg9ev5dGfO6GIxfkCmnnvGD4laSgk20/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vM3AyREFG/N0pibWdFcE9Qc2Jj/VU5mbUd2WWJTNFBw/d21NeUNVSWJjcTdv/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk1U/RTQvTkRVd01qWTVN/Uzl3YUc5MC9ieTl3/WVdsdWRHVnlMV0Z5/L2RHbHpkQzF3YjNK/MGNtRnAvZEMxcGJp/MXpkSFZrYVc4dS9h/bkJuUDNNOU5qRXll/RFl4L01pWjNQVEFt/YXoweU1DWmovUFdW/WlVXNVdPRUoyYUZa/Sy9RV3R0TVc1V05X/a3lUbXN6L2VGWTRT/ak01YzJ0c1dHOXEv/Y1RJMFJIQXhaVzg5.jpeg",
    },
    {
      name: "Felipe",
      planet: "Neptune",
      image:
        "https://imgs.search.brave.com/fg8xsDYw2r6m_VI1XOuI0R7kgtF00EtivFFMyMdvswU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVTNqSFl1/d3hneUM2MHRFUk1Q/MFR6QWlyNjV0MGRJ/ODZrdFRJdDJFYV9Q/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVuWlhS/MGVXbHRZV2RsL2N5/NWpiMjB2YVdRdk1U/QTQvTnpZeE16QXhO/aTl3YUc5MC9ieTlt/Y21GdFpXUXRjR2h2/L2RHOW5jbUZ3YUMx/b1lXNW4vYVc1bkxX/OXVMWGRoYkd3dS9h/bkJuUDNNOU5qRXll/RFl4L01pWjNQVEFt/YXoweU1DWmovUFRN/eFpqSnRjWEZvVm1j/NS9YMVpaVFVKNVZY/UlJlRFZzL1VYSmlh/ME54V205amJVZDQv/VUVSR1ZVVmtNMjg5.jpeg",
    },
  ];
  return (
    <>
      <h1>Hello</h1>
      <Title name="Humans" />
      {humans.map((human) => (
        <div key={human.name}>
          <Human human={human} />
        </div>
      ))}
    </>
  );
}
export default App;
