import EventCard from "../../components/event-card";

function makeActive(e) {
    let fc = e.currentTarget.parentNode.children;
    let afc=[...fc];
    afc.forEach(el => {
        el.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
}

export default function Gehu() {
    return (
        <div class="ps">
            <div class="ui secondary pointing menu">
                <button class="item" onClick={makeActive}>
                    IEEE
                </button>
                <button class="item active"  onClick={makeActive}>
                    ACM-W
                </button>
            </div>
            <div class="ui segment">
                <EventCard/>
            </div>
        </div>
    )
}