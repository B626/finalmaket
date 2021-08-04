document.querySelectorAll('.third-part_services_second_img_link').forEach((item) =>
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '')

        document.querySelectorAll('.third-part_services_second_img_link').forEach(
            (child) => child.classList.remove('.third-part_services_second_img_link--active') 
        );
        document.querySelectorAll('.third-part_services_second-part_main-content').forEach(
            (child) => child.classList.remove('.third-part_services_second-part_main-content--active') 
        );

        item.classList.add('.third-part_services_second_img_link--active');
        document.getElementById(id).classList.add('.third-part_services_second_img_link--active');
    })
);