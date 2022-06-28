import './style.css';

function InfoCard({className, children}){
    return(
        <div className={className}>
            {children}
        </div>
    );
}

export default InfoCard;
