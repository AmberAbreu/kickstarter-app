-- AlterTable
ALTER TABLE "Campaign" ADD COLUMN     "photoUrl" TEXT NOT NULL DEFAULT E'https://s3.amazonaws.com/omiweb/wp-content/uploads/2018/02/23121159/startup.jpg',
ADD COLUMN     "raised" INTEGER NOT NULL DEFAULT 0;
