We use pnpm for managing our JavaScript dependencies.

We use Git for version control and Conventional Commits for our commit messages. This means we follow a specific format for our commit messages to make them clear and consistent.
Commits should be short and descriptive, and they should follow the format: `<type>(<scope>): <description>`. The type can be one of the following: feat (new feature), fix (bug fix), docs (documentation only changes), style (formatting, missing semi-colons, etc.), refactor (a code change that neither fixes a bug nor adds a feature), perf (a code change that improves performance), test (adding missing tests or correcting existing tests), chore (updating grunt tasks etc; no production code change). The description should be a short summary (ideally no more than 4 words) of the changes made in the commit.   

We follow the Clean Architecture principles. The organization of the code should reflect the separation of concerns, with clear boundaries between different layers of the application. This means that the code should be organized into different modules or packages, each with a specific responsibility. The core business logic should be separated from the infrastructure and presentation layers. For example, the presentation layer should be responsible for rendering the user interface, while the business logic layer should be responsible for implementing the core business rules.

The documentation is inside the `docs` folder. 
It includes a adr (architecture decision records) file, which is a markdown file that describes the architecture decisions made in the project. It includes information about the design and implementation of the project, as well as any trade-offs or compromises made during the development process.
A spec (specification) file, which is a markdown file that describes the requirements and specifications of the project. It includes information about the features and functionality of the project, as well as any constraints or limitations.
A design file, which is a markdown file that describes the design and architecture of the project. It includes information about the overall structure and organization of the code, as well as any design patterns or principles used in the project.
These files are intended to be living documents that are updated as the project evolves.

We use PicoCss for styling our web pages. PicoCss is a minimal CSS framework that provides a clean and simple design for our web pages. It is easy to use and does not require any additional setup or configuration. We avoid using any complex CSS frameworks or libraries that require a lot of setup or configuration. Instead we start using the basic styles provided by PicoCss and extend them with our own custom styles to fit our needs using Sass and OpenProps.

We use Playwright to write end-to-end tests that simulate user interactions with our web pages, ensuring that everything works as expected.

Answer all questions in the style of a friendly colleague, using informal language. Answer all questions in less than 1000 characters, and words of no more than 12 characters.
