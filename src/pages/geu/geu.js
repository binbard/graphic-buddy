import EventCard from "../../components/event-card";

function makeActive(e) {
    let fc = e.currentTarget.parentNode.children;
    let afc = [...fc];
    afc.forEach(el => {
        el.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
}

export default function Geu() {
    return (
        <div class="ps">
            <div class="ui secondary pointing menu">
                <a class="item" onClick={makeActive}>
                    IEEE
                </a>
                <a class="item active" onClick={makeActive}>
                    ACM
                </a>
                <a class="item" onClick={makeActive}>
                    Kavyanjali
                </a>
            </div>
            <div class="ui segment">
                <EventCard/>
            </div>
        </div>
    )
}