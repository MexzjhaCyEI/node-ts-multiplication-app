import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file-use-case";

interface RunOPtions {
  base: number;
  limit: number;
  show: boolean;
  name: string;
  destination: string;
}

export class ServerApp {
  static run({ base, limit, show, name, destination }: RunOPtions) {
    console.log("Servidor runing...");
    // console.log({options});

    const table = new CreateTable().execute({ base, limit });

    const wasSaved = new SaveFile().execute({
      fileContent: table,
      destination: destination,
      fileName: name,
    });
    if (show) console.log(table);

    wasSaved ? console.log("File created") : console.error("File not created");
  }
}
