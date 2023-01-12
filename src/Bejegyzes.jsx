function Bejegyzes(props) {
    const {cim, tartalom = "Nincs tartalom"} = props;
    return ( <div>
        <h4>{cim}</h4>
        <p>{tartalom}</p>
    </div> );
}

export default Bejegyzes;