
async function fetchPosts() {
    try {
        console.log("Starting fetch...");

        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );

        console.log("Response status:", response.status);

        const posts = await response.json();

        console.log("Posts received:", posts.length);
        console.log("First post:", posts[0]);

        displayPosts(posts);
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}

function displayPosts(posts) {
    const ul = document.getElementById('post-list');

    if (!ul) {
        console.error("post-list element not found");
        return;
    }

    posts.forEach(post => {
        const li = document.createElement('li');

        const h1 = document.createElement('h1');
        h1.textContent = post.title;

        const p = document.createElement('p');
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);
        ul.appendChild(li);
    });
}

fetchPosts();