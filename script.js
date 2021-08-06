
const tabs = (headerSelector, tabSelector, conntentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contectSelector)

        function hideTabContent() {
            content.forEach(item => {
                item.style.display = 'none';
        })

        tab.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

        function showTabContent(i = 0) {
           content[i].style.display = 'block'
           tab[i].classList.add(activeClass)
        }

        hideTabContent()
        showTabContent()

        header.addEventListener('click', (e) => {
            const target = e.target
            if(target.classList.contains(tabSelector.replace(/\./, "")) || 
            target.parentNode.contains(tabSelector.replace(/\./, ""))) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent()
                        showTabContent(i)
                    }
                })
            }
        })
}



export default tabs