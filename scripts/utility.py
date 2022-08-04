import json
import random
import time
import datetime

from dateutil.relativedelta import relativedelta

from dependency import Dependency


class Utility:
    def writeJSON(path, data):
        with open(path, "w") as outfile:
            outfile.write(json.dumps(data, indent=4))

    def convertDateToAge(birthString):
        currentDate = datetime.datetime.today()
        birthDate = datetime.datetime.strptime(birthString, "%d-%m-%Y")

        intervalDate = relativedelta(currentDate, birthDate)

        return intervalDate.years

    def randomBirthPlace():
        return random.choice(Dependency.birthPlaceList)

    def randomBirthDate(start, end):
        timeFormat = "%d-%m-%Y"

        stime = time.mktime(time.strptime(start, timeFormat))
        etime = time.mktime(time.strptime(end, timeFormat))

        ptime = stime + random.random() * (etime - stime)

        return time.strftime(timeFormat, time.localtime(ptime))

    def randomGender():
        return random.choice(["Laki-laki", "Perempuan"])

    def randomGrade():
        return random.randint(10, 12)

    def randomSMKMajor():
        return random.choice(Dependency.smkMajorList)

    def randomSMAMajor():
        return random.choice(Dependency.smaMajorList)