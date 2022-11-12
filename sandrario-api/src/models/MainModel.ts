import { PrismaClient } from '@prisma/client'

class MainModel {
  async getInstance (): Promise<PrismaClient> {
    return new PrismaClient()
  }
}

export default MainModel
