from excel import Excel
from utility import Utility


class Translate:
    def route():
        workbook = Excel("./excel/route.xlsx")

        routeData = workbook.get_value_multiple_2d("E5", "H17")

        routeList = []
        for routeIndex, route in enumerate(routeData):
            routeObject = {
                "id": routeIndex + 1,
                "route": route[0],
                "example": route[1],
                "parameter": route[2],
                "description": route[3],
            }

            routeList.append(routeObject)

        Utility.writeJSON("./json/route.json", routeList)


Translate.route()
