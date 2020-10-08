### Access the Python Interpreter:
- `python3`


### Import the 'mongo' instance from app.py:
- `from app import mongo`


### Create Index on the 'tasks' collection, using 'task_name' and 'task_description' keys:
- **NOTE**: You can only have a maximum of ONE Index on the collection, but multiple keys permitted on that Index.
- `mongo.db.tasks.create_index([("task_name", "text"), ("task_description", "text")])`


### See all Index information:
- `mongo.db.tasks.index_information()`


### Drop/Delete a single Index:
- `mongo.db.tasks.drop_index('task_name_text_task_description_text')`


### Drop/Delete all Indexes:
- `mongo.db.tasks.drop_indexes()`


### Quit the Python Interpreter:
- `quit()`
