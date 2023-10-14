// comment card map function
document.addEventListener('DOMContentLoaded', function () {
    // Sample JSON data
    const commentData = [
        { name: "James Henry", location:"San Diego", title: 'comment 1', content: 'Comment for Card 1', imgUrl:"images/users/1.jpg" },
        { name: "Williams Mary", location:"San Diego, ca", title: 'comment 2', content: 'Comment for Card 2', imgUrl:"images/users/2.jpg" },
        { name: "Jones John", location:"San Diego, california", title: 'comment 3', content: 'Comment for Card 3', imgUrl:"images/users/3.jpg" }
        // Add more data as needed
    ];

    // Get the card container
    const commentCardContainer = document.getElementById('comments-container');

    // Dynamically generate cards using map
    const commentCard = commentData.map(item => {
        return `
        <div>
        <div>
          <p className="text-left">
            ${item.content}
          </p>
        </div>
        <div className="flex text-center ">
                <div class="w-24 mask mask-hexagon inline-block">
                    <img src= ${item.imgUrl} />
                </div>
                <h3>  ${item.name} </h3>  
        </div>
      </div>
        `;
    });

    // Insert the generated HTML into the card container
    commentCardContainer.innerHTML = commentCard.join(' ');
});