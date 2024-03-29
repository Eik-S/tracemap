import { Context } from 'koa'
import { getHandlesFromRequestBody } from '../../utils/request-params'
import { CrawlStatus } from 'tracemap-api-types'
import { getCrawledHandles } from '../../services/neo4j/get-user-relations-service'

export async function getCrawlStatusController(ctx: Context): Promise<CrawlStatus | void> {
  const handles = getHandlesFromRequestBody(ctx)
  const crawlStatus = await getCrawledHandles(handles)

  ctx.status = 200
  ctx.body = crawlStatus
}
