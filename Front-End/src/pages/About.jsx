function About() {
    return (
        <section className="container">
            <div className="pt-4">
                <h1>About page</h1>
                <p className="mt-4">
                    The Meal DB is a simple web app built as part of school module 294 – Front-end Development.
                    It lets you browse, search, update, and delete meals stored via a local JSON Server API.
                </p>
                <p> The goal was to practice working with REST APIs and building a functional front-end from scratch.</p>
                <h2>Tech Stack</h2>
                <p>This project was built using the following technologies:</p>
                <ul>
                    <li>Bootstrap – for responsive layout and styling</li>
                    <li>Bootstrap Icons – for clean and consistent iconography</li>
                    <li>React Router – for client-side navigation between pages</li>
                    <li>JSON Server – as a lightweight mock REST API</li>
                </ul>
                <h2>Want to see more?</h2>
                Check out my other projects on my <a target="_blank" href="https://miguelcosta.xyz/">portfolio</a>.
            </div>


        </section>
    )
}

export default About;