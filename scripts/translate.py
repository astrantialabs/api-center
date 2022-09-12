from excel import Excel
from utility import Utility


class Translate:
    def route():
        workbook = Excel("./scripts/excel/route.xlsx")

        routeData = workbook.get_value_multiple_2d("E5", "H15")

        routeList = []
        for routeIndex, route in enumerate(routeData):
            routeObject = {
                "id": routeIndex + 1,
                "route": route[0],
                "example": route[1],
                "parameter": "" if route[2] is None else route[2],
                "description": route[3],
            }

            routeList.append(routeObject)

        Utility.writeJSON("./scripts/json/route.json", routeList)


Translate.route()
