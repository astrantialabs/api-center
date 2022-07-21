from fastapi import FastAPI

from service import Service


app = FastAPI()


@app.get("/api/funfact")
def getFunFact():
    return Service.getFunFact()
