from excel import Excel
from utility import Utility


class Translate:
    def route():
        workbook = Excel("./scripts/excel/route.xlsx")

        routeData = workbook.get_value_multiple_2d("E5", "I15")

        routeList = []
        for routeIndex, route in enumerate(routeData):
            routeObject = {
                "id": routeIndex + 1,
                "route": route[0],
                "example": route[1],
                "parameter": "" if route[2] == None else route[2],
                "description": route[3],
                "attribute": route[4].split(", "),
            }

            routeList.append(routeObject)

        Utility.writeJSON("./scripts/json/route.json", routeList)


Translate.route()
