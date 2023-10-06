// comment card map function
document.addEventListener('DOMContentLoaded', function () {
    // Service JSON data
    const serviceData = [
        {id: 1, 
            imgUrl:'images/carpet-cleaning-service.jpg',
            more:'services/carpetcleaning.html',
            title: 'Carpet Cleaning Service in San Diego, CA', 
            content: 'A well-maintained carpet can transform the ambiance of your home, making it warm, inviting, and comfortable. In San Diego, California, where sunny days and outdoor activities are abundant, keeping your carpets clean is essential to maintain a healthy indoor environment. Thankfully, professional carpet cleaning services in San Diego can help you achieve that pristine look and feel for your carpets. In this article, we will explore the importance of carpet cleaning, the benefits of professional services, and how you can find the best carpet cleaning service in San Diego.' 
        },
        {id: 2, 
            imgUrl:"images/carpet-cleaning-services.jpg",
            more:'services/sofa.html',
            title: 'Service Title 2', 
            content: 'Service a for Card 2' 
        },
        {   id: 3, 
            imgUrl:"images/carpet-cleaning.jpg" ,
            more:'services/stairs.html',
            title: 'Service Title 3', 
            content: 'Service a for Card Stairs'
        },
        {   id: 4, 
            imgUrl:"images/carpet-cleaning.jpg" ,
            more:'services/areaRugCleaning.html',
            title: 'Service Title area rug cleaning', 
            content: 'Service a for Area rug cleaning'
        },
        {   id: 5, 
            imgUrl:"images/carpet-cleaning.jpg" ,
            more:'services/upholstery.html',
            title: 'Service Title  Upholstery cleaning', 
            content: 'Service a for Uphosltery cleaning'
        }
        // Add more data as needed
    ];

    // Get the card container
    const cardContainer = document.getElementById('services-container');

    // Dynamically generate cards using map
    const serviceCard = serviceData.map(item => {
        return `
        <div class="card w-96 bg-base-100 shadow-xl my-10">
            <figure class="px-10 pt-10">
                <img src=${item.imgUrl} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title"> ${item.title}</h2>
                <p>${item.content}</p>
                <div class="card-actions">
                <a href=${item.more} >Read more...</a>
                </div>
            </div>
        </div>`;
    });

    // Insert the generated HTML into the card container
    cardContainer.innerHTML = serviceCard.join('');
});