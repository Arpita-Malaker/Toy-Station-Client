import { Helmet } from "react-helmet";



const Bolgs = () => {



    return (
        <div className="mt-16 ml-16">
            <Helmet>
                <title>Toy Station | Blogs</title>

            </Helmet>

            <h2 className="text-xl text-blue-700">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p>Ans: Access token: It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period. Refresh token: The refresh token is used to generate a new access token.
                These can be stored server-side or in a session cookie.
            </p>
            <p className="text-xl text-blue-700 mt-10">2.Compare SQL and NoSQL databases?</p>
            <div className="flex gap-7">
                <p><span className="text-blue-700">Structured Query Language (SQL)</span> is a programming language that allows both technical and non-technically-minded users to query, manipulate, and change data in a relational database.SQL databases are scalable vertically, meaning that you can increase the maximum load by adding further storage components like RAM or SSD. While in some cases this may mean that SQL databases are limited by the resources available on the server, cloud-based storage and other technologies can provide more scalability with SQL. </p>
                <p> <span className="text-blue-700">NoSQL</span> databases are non-relational databases that store data in a manner other than the tabular relations used within SQL databases.
                    1.NoSQL is schema-less (no fixed data model).

                    2. NoSQL databases have a dynamic schema for unstructured data, making integrating data in certain types of applications easier and faster.

                    3. NoSQL uses non-tabular data models, which can be document-oriented, key-value, or graph-based. The most common NoSQL databases include MongoDB, Cassandra, HBase, Redis, Neo4j, and CouchDB.
                </p>
            </div>

            <p className="text-xl text-blue-700 mt-10">What is express js? What is Nest JS?</p>
            <p>Ans:Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
            <p>Nest. js supports and provides large community-based, nest-supported modules to build out any specific feature of your choice, from concepts like TypeORM, Mongoose, and GraphQL to logging, validation, caching, WebSockets, and much more</p>
<p className="text-xl text-blue-700 mt-10 ">What is MongoDB aggregate and how does it work ?</p>
            <p className="mb-16">Ans: MongoDB enables you to perform aggregation operations through the mechanism called aggregation pipelines. These are built as a sequential series of declarative data processing operations known as stages</p>



        </div>
    );
};

export default Bolgs;