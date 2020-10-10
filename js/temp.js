components = {}
components.sentMess = `
<section class = "sentMess">
<div class="SentMessContent message">Hiii :></div>
</section>
`
components.recievedMess = `
<section class = "sentMess">
    <div class="SentMessContent message">Hiii :></div>
</section>
`
components.mess = `

`

const form = document.getElementById('messageInput');

function sentMess(content) {
    return `
    <section class = "sentMess">
        <div class="SentMessContent message">${content}</div>
    </section>
    `
}
function receiveMess(owner,content){
    return `
        <section class = "recievedMess">
            <div class="owner">
                ${owner}
            </div>
            <div class="RecievedMessContent message">
                ${content}
            </div>
        </section>
    `
}
// code lam deo gi dung code nua
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const conversation_detail = document.getElementsByClassName('conversation-detail')[0];
    conversation_detail.insertAdjacentHTML('beforeend',sentMess(form.message.value));
})
window.setInterval(function() {
    var elem = document.getElementByClassName('messageView')[0];
    elem.scrollTop = elem.scrollHeight;
}, 50k );