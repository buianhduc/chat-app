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
    <div class = "sentMess d-flex flex-row justify-content-end">
              <div class="SentMessContent message">${content}</div>
            </div>
    `
}
function receiveMess(owner,content){
    return `
        <div class = "recievedMess">
            <div class="owner">
                ${owner}
            </div>
            <div class="RecievedMessContent message">
                ${content}
            </div>
        </div>
    `
}
// code lam deo gi dung code nua
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const conversation_detail = document.getElementsByClassName('conversation-detail')[0];
    conversation_detail.insertAdjacentHTML('beforeend',sentMess(form.message.value));
})