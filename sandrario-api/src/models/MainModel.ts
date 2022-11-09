import {PrismaClient} from '@prisma/client'


class MainModel {
    async getInstance() {
        return new PrismaClient()
    }
}

export default MainModel