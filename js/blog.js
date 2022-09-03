const blogs = [
    {
        id: 1,
        question: "This is a test of Twitter’s new Edit Tweet feature. This is only a test",
        answer: "This is a test of Twitter’s new Edit Tweet feature. This is only a testThis is a test of Twitter’s new Edit Tweet feature. This is only a testThis is a test of Twitter’s new Edit Tweet feature. This is only a test",
        author: {
            name: "Anik",
            date: "Sat Sep 03 2022 09:02:24 GMT-0700 (Pacific Daylight Time)"
        }
    },
    {
        id: 2,
        question: "This is a test of Twitter’s new Edit Tweet feature. This is only a test",
        answer: " This is a test of Twitter’s new Edit Tweet feature. This is only a testThis is a test of Twitter’s new Edit Tweet feature. This is only a test",
        author: {
            name: "Anik",
            date: "Sat Sep 03 2022 09:02:24 GMT-0700 (Pacific Daylight Time)"
        }
    },
    {
        id: 3,
        question: "This is a test of Twitter’s new Edit Tweet feature. This is only a test",
        answer: " This is a test of Twitter’s new Edit Tweet feature. This is only a testThis is a test of Twitter’s new Edit Tweet feature. This is only a testThis is a test of Twitter’s new Edit Tweet feature. This is only a testThis is a test of Twitter’s new Edit Tweet feature. This is only a testThis is a test of Twitter’s new Edit Tweet feature. This is only a test",
        author: {
            name: "Anik",
            date: "Sat Sep 03 2022 09:02:24 GMT-0700 (Pacific Daylight Time)"
        }
    },
    {
        id: 4,
        question: "This is a test of Twitter’s new Edit Tweet feature. This is only a test",
        answer: "This is a test of Twitter’s new Edit Tweet feature. This is only a testThis is a test of Twitter’s new Edit Tweet feature. This is only a test ",
        author: {
            name: "Anik",
            date: "Sat Sep 03 2022 09:02:24 GMT-0700 (Pacific Daylight Time)"
        }
    },
];

const blog_section = document.getElementById('blogs');
blogs.forEach(item => {
    const blog = document.createElement("div");
    blog.classList.add("my-1", "p-3")
    blog.innerHTML = `
                <h1>${item.question}</h1>
                <small>By <strong>${item.author.name}</strong></small>
                <br>
                <small>${item.author.date}</small>
                <p class="my-3">${item.answer}</p>
`;
    blog_section.appendChild(blog);
});
