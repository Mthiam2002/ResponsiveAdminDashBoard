const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});





Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.NomProduit}</td>
    <td>${order.NumeroProduit}</td>
    <td>${order.StatutsPayment}</td>
    <td class="${order.Statuts === 'Décliné' ?
    'danger' : order.Statuts === 'En attente' ?
    'warning' : 'primary'}">${order.Statuts}</td>
    <td class="primary">Détails</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});