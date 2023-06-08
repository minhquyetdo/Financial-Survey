# Financial Survey

## Overview
The "Financial survey" is a centralized data management solution built on MongoDB. It consolidates financial data and provides an environment for efficient data processing, storage, and analysis. This data warehouse comprises a staging layer, core layer (dimension tables and a fact table), and leverages MongoDB's powerful features for enhanced data management.

**Technical features** in this Data Warehouse:
|Features| Description |
|:------|-----------:|
|**DBMS**|MongoDB|
|**ETL Tool**|MongoDB's engine|
|**Dimensional Modeling**|With dimension tables and a fact table. This model allows for efficient organizing and storing of data|
|**Surrogate and Foreign Keys**| Ensures data integrity, consistent linkage, and simplified data retrieval|
|**Document-oriented**| This flexibility is particularly beneficial when dealing with complex and diverse data structures |
|**ETL Workflow**| JavaScript code executed within MongoDB's engine drives the workflow, no needed 3rd party engine|

#### Explode the repository 
|Files| Description |
|:------|-----------:|
|what-how-why.txt|Data warehouse document|
|collections-index.pdf|Collections's explanation |
|erd-model.pdf|Relationship between tables (entities) in database|
|create-database.js|Source code for creating collections in the "financeSurvey" Document|
|business-queries.js|Source code analysis queries|
|US_Adult_Income.csv|Survey data|


## Clone the data warehouse

#### Requirements and Setting for MongoDB
To operate the Finance Data Warehouse, ensure you have the following:

1. **MongoDB**: Install MongoDB on your system or use a MongoDB server. The data warehouse was developed using MongoDB and requires a compatible environment.
2. **Database Setup**: Create a new database in MongoDB to host the data warehouse. You can use the MongoDB shell or a graphical interface to create the necessary collections.
3. **Execution Environment**: Set up an execution environment capable of running JavaScript code within the MongoDB engine. This can be achieved through the MongoDB shell, MongoDB Compass, or by using external tools capable of interacting with MongoDB.

#### Getting Started

1. **Configure MongoDB**: Install and configure MongoDB according to your operating system. Ensure MongoDB is running and accessible.

2. **Extract Data**: Load the source data into the staging collection using MongoDB's import tool or other import methods.

3. **Transform and Load Data**: Execute the provided JavaScript code within MongoDB's engine to transform and load data from the staging collection into the dimension and fact collections. Update the code as needed to match your specific data schema and collection names.

4. **Schedule ETL Workflow (Optional)**: Set up a scheduler or use MongoDB's built-in cron feature to schedule the execution of the ETL workflow. Configure the schedule to run the workflow in the desired sequence: loading data to the staging collection, transforming and loading data into the dimension collections, and finally loading data into the fact collection.

## License

Feel free to contribute, make improvements, or use the code as a reference for your own database management system.
