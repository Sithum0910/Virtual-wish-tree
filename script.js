const wishForm = document.getElementById('wishForm');
const wishInput = document.getElementById('wishInput');
const tree = document.querySelector('.tree');

wishForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const wishText = wishInput.value.trim();
    if (wishText) {
        addWishToTree(wishText);
        wishInput.value = '';
    }
});

function addWishToTree(wish) {
    const wishElement = document.createElement('div');
    wishElement.classList.add('wish');
    wishElement.textContent = wish;

    // Randomize position on the tree
    const x = Math.random() * 80 + 10; // 10% to 90% of tree width
    const y = Math.random() * 60 + 20; // 20% to 80% of tree height
    wishElement.style.left = `${x}%`;
    wishElement.style.top = `${y}%`;

    tree.appendChild(wishElement);

    // Add click to reveal animation
    wishElement.addEventListener('click', () => {
        alert(`Your wish: ${wish}`);
    });
}
